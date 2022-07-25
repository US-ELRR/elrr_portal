import personnelData from '@/data/personnelData.json';

export default function handler(req, res) {
  res.status(200).send(personnelData.data);
}
