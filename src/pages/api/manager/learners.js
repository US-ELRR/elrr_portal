import learners from '@/data/learnersData.json';

export default function handler(req, res) {
  res.status(200).json(learners);
}
