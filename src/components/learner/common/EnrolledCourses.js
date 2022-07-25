import { useRouter } from 'next/router';

export default function EnrolledCourses({ courses = [] }) {
  const router = useRouter();

  const handleNavigate = (course) => {
    router.push(`/dashboard/learner/courses/${course.courseid}`);
  };

  return (
    <div className='bg-white rounded shadow p-4 flex-1'>
      <h1 className='text-lg text-center font-semibold pb-2 border-b'>
        Enrolled Courses
      </h1>
      <div className='grid gap-y-2 '>
        {/* table headers */}
        <div className='flex items-baseline font-semibold mt-2 gap-1'>
          <div className='w-2/6'>Course Identifier</div>
          <div className='flex-1'>Course Name</div>
          <div>Start Date</div>
        </div>
        {courses.length > 0 &&
          courses?.map((course) => (
            <div
              onClick={() => handleNavigate(course)}
              key={course.name}
              className='flex items-baseline hover:underline hover:text-dod-100 cursor-pointer gap-1 even:bg-gray-50'
            >
              <div className='w-2/6'>{course.courseidentifier}</div>
              <div className='flex-1'>{course.name}</div>
              <div>{course.coursestartdate}</div>
            </div>
          ))}
      </div>
      {courses.length === 0 && (
        <div className='text-center text-gray-500 mt-4'>No courses enrolled</div>
      )}
    </div>
  );
}
