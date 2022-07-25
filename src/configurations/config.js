// get the environment variables
const service = process.env.NEXT_PUBLIC_SERVICE;

export default {
  service: service,
  learners: `${service}/api/learners`,
  person: `${service}/api/learners`,
};
