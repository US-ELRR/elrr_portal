import courseData from '@/data/courseData.json';

export default function handler(req, res) {
  const match = courseData.find(
    (course) => course.courseid == req.query.courseid
  );
  res.status(200).json(match);
}
