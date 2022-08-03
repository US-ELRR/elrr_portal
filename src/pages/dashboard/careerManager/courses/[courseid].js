import { useEffect, useState } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';

export default function CoursePage() {
  const router = useAuthRouter();
  const [course, setCourse] = useState({});
  const {
    query: { courseid },
  } = router;

  // on mount retrieve course data
  useEffect(() => {
    if (courseid) {
      axios
        .get(`/api/courses/${courseid}`)
        .then((res) => {
          setCourse(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [courseid]);

  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 text-center'>
        <h1 className='text-3xl font-semibold'>{course.name}</h1>
      </div>
      <DetailsCard obj={course} title='Course Details' cols={3} />
    </DefaultLayout>
  );
}
