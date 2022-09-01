import { useEffect, useState } from 'react';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';

const cols = [
  'Course Code',
  'Course Name',
  'Course Start Date',
  'Course Status',
];

const keys = ['courseid', 'name', 'coursestartdate', 'recordstatus'];
export default function CoursesPage() {
  const router = useAuthRouter();

  const [courses, setCourses] = useState([]);
  const handleClick = (id) => {
    router.push(`/dashboard/careerManager/courses/${id}`);
  };
  useEffect(() => {
    axios
      .get('/api/courses')
      .then(({ data }) => {
        setCourses(data);
      })
      .catch();
  }, []);
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Courses Page
      </h1>
      <Table
        data={courses}
        cols={cols}
        keys={keys}
        primaryKey={'courseid'}
        onClick={handleClick}
      />
    </DefaultLayout>
  );
}
