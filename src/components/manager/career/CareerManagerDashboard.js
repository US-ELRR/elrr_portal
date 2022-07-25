import { useEffect, useMemo, useState } from 'react';
import Banner from '@/components/manager/common/Banner';
import CompetenciesPieChart from './CompetenciesRadarChart';
import CompletedCompetencies from '@/components/manager/common/CompletedCompetencies';
import EmploymentCourseScatterPlot from './EmploymentCourseScatterPlot';
import EnrolledCourses from '@/components/manager/common/EnrolledCourses';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function CareerManagerDashboard() {
  const router = useAuthRouter();

  const userData = useStore((state) => state.userData);
  const [assignedLearner, setAssignedLearner] = useState({});
  const handleNavigate = (course) => {
    router.push(`/dashboard/careerManager/courses/${course.courseid}`);
  };

  useEffect(() => {
    // try to show the first user in the assigned learner list
    if (userData?.assigned) {
      setAssignedLearner(userData.assigned[0] || {});
    }
  }, []);

  return (
    <>
      <Banner user={userData?.learner.personnel.person} />
      {/* Chart and user selector */}
      <div className='flex gap-4 my-6'>
        <div className='mt-10 bg-white p-2  rounded shadow w-1/2'>
          <h2 className='text-2xl font-semibold mb-2 pb-2 px-2 border-b border-b-dod-900/10'>
            Assigned learners
          </h2>
          <div className='flex flex-col gap-2 px-2'>
            {assignedLearner?.personnel &&
              userData?.assigned &&
              userData?.assigned.map((learner) => (
                <button
                  key={learner.personnel.person.personid}
                  className={classNames(
                    `p-2 rounded w-full text-left hover:bg-dod-500/10 focus:outline-dod-100`,
                    assignedLearner?.personnel?.person?.personid ===
                      learner.personnel.person.personid && 'bg-gray-50 shadow'
                  )}
                  onClick={() => {
                    console.log(learner);

                    setAssignedLearner(learner);
                  }}
                >
                  {learner.personnel.person.name}
                </button>
              ))}
          </div>
        </div>
        <div className='w-1/2 p-2 mt-6'>
          {assignedLearner && (
            <CompetenciesPieChart
              userId={assignedLearner?.personnel?.person?.personid}
            />
          )}
        </div>
      </div>
      <div className='w-full'>
        {assignedLearner && (
          <EmploymentCourseScatterPlot
            userId={assignedLearner?.personnel?.person?.personid}
          />
        )}
      </div>
      {/* Enrolled courses */}
      <div className='grid gap-4 mt-6'>
        <EnrolledCourses
          courses={assignedLearner?.courses?.sort(
            (a, b) => new Date(b.coursestartdate) - new Date(a.coursestartdate)
          )}
          handleNavigate={handleNavigate}
        />

        <CompletedCompetencies
          completedCompetencies={assignedLearner?.competencies}
        />
      </div>
    </>
  );
}
