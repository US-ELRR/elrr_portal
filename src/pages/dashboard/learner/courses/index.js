import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

const cols = [
  'Course Code',
  'Course Name',
  'Course Start Date',
  'Course Status',
];

const keys = ['courseid', 'name', 'coursestartdate', 'recordstatus'];

export default function CoursesPage() {
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  const handleClick = (id) => {
    router.push(`/dashboard/learner/courses/${id}`);
  };

  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Courses Page
      </h1>
      <Table
        data={userData?.learner?.courses}
        cols={cols}
        keys={keys}
        primaryKey={'courseid'}
        onClick={handleClick}
      />
    </DefaultLayout>
  );
}
