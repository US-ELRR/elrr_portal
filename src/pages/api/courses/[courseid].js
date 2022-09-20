import courseData from '@/data/courseData.json';

export default function handler(req, res) {
  const courseid =  req.query.courseid;

  const match = courseData.find(
    (course) => course.courseid == courseid
  );

    
  if (!match) {
    res.status(404).json({
      error: 'Course not found',
    });
    return;
  }

  res.status(200).json(match || {});
} 
