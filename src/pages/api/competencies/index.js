import competenciesData from '@/data/competenciesData.json';

export default function handler(req, res) {
  res.status(200).json(competenciesData);
}
