import competenciesData from '@/data/competenciesData.json';

export default function handler(req, res) {
  // Get the competency id from the request
  const competencyid = req.query.competencyid;

  // find the competency in the data
  const competency = competenciesData.find(
    (competency) => competency.competencyid == competencyid
  );

  // if the competency is not found, return 404
  if (!competency) {
    res.status(404).json({
      error: 'Competency not found',
    });
    return;
  }
  res.status(200).json(competency || {});
}
