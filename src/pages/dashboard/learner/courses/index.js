import { useState } from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DropDownButton from '@/components/DropDownButton';
import Search from '@/components/Search';
import Table from '@/components/common/Table';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
const columnTitles = [
  'Course Code',
  'Course Name',
  'Course Start Date',
  'Course Status',
];

const keys = ['courseid', 'name', 'coursestartdate', 'recordstatus'];

export default function CoursesPage() {
  const [searchField, setSearchField] = useState('')
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  const handleClick = (id) => {
    router.push(`/dashboard/learner/courses/${id}`);
  };
  const handleChange = e => {
    setSearchField(e.target.value);
  };
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Courses Page
      </h1>
      <div className='flex justify-between mt-8'>
        <Search handleChange={handleChange} />
        <DropDownButton buttonText={'Download'} items={['PDF', 'CSV']} />
      </div>

      <Table
        filterText={searchField}
        data={userData?.learner?.courses}
        cols={columnTitles}
        keys={keys}
        primaryKey={'courseid'}
        onClick={handleClick}
      />
    </DefaultLayout>
  );
}
