import competenciesCourseDistribution from '@/data/historical/competencies-course-distribution.json';

export default function handler(req, res) {
  // find the user
  const user = competenciesCourseDistribution.find(
    (learner) =>
      learner.personnel.person.personid === parseInt(req.query.userId)
  );

  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  res.status(200).json(user);
}
