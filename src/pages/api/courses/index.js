import courseData from '@/data/courseData.json';

export default function handler(req, res) {
  res.status(200).json(courseData);
}
