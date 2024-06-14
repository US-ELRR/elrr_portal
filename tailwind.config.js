// tailwind.config.js
module.exports = {
  jit: false,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        dod: {
          100: '#529AD9',
          300: '#3A6D99',
          500: '#35648C',
          700: '#2C5273',
          900: '#1D364D',
        },
      },
    },
    plugins: [
      // require('flowbite/plugin')
    ],
  },
};
