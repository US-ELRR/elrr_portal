import personnelData from '@/data/personnelData.json';

export default function handler(req, res) {
  // get the personid from the url
  const { id } = req.query;
  const {
    data: { learners },
  } = personnelData;

  // console.log(learners);

  // iterate over the array of learners
  let person = learners.find(
    (learner) => learner.personnel.person.personid == id
  );

  // if the person is not found, return an error
  if (!person) {
    return res.status(404).send({
      error: 'Person not found',
    });
  }

  // flatten the data for rendering
  person = {
    ...person.personnel,
    courses: person.courses,
    competencies: person.competencies,
  };

  return res.status(200).send(person);
}
