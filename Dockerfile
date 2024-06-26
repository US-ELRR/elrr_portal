# Install dependencies only when needed
FROM node:18.20.3-alpine AS deps

# RUN apk add libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install 

# Rebuild the source code only when needed
FROM node:18.20.3-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build


# Production image, copy all the files and run next
FROM node:18.20.3-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# RUN addgroup --system --group 1001
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/src/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]
