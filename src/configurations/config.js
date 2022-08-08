// get the environment variables
const service = process.env.NEXT_PUBLIC_SERVICE;
const profileServices = {
  service: service,
  learners: `${service}/api/learners`,
  person: `${service}/api/learners`,
}
export default profileServices;
