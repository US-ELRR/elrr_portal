import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import CompetenciesPieChart from '@/components/manager/career/CompetenciesRadarChart';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

import EmploymentCourseScatterPlot from '@/components/manager/career/EmploymentCourseScatterPlot';

export default function Personnel() {
  const router = useAuthRouter();
  const { userData } = useStore();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [assignedLearner, setAssignedLearner] = useState({});
  useEffect(() => {
    // try to show the first user in the assigned learner list
    if (userData?.assigned) {
      setAssignedLearner(userData.assigned[0] || {});
    }
  }, [userData?.assigned]);

  const columnTitles = [
    'Course Name',
    'Course Provider',
    'Course Status',
  ];
  const keys = ['name', 'courseprovidername', 'recordstatus'];

  const courses = userData?.learner?.courses;
  const handleClick = (courselink) => {
    if(courselink){
        router.push(courselink);
    }
    router.push(`/dashboard/trainingManager/courses/${id}`);
  };

  //Top Competencies
  const comTitles = [
    'Competency Title',
    'Competency Owner',
    'Course Status',
  ];
  const comKeys = ['competencyframeworktitle', 'owner', 'recordstatus'];

  const handleCompClick = (id) => {
    router.push(`/dashboard/trainingManager/competencies/${id}`);
  };

  const [competencies, setCompetencies] = useState([]);
  useEffect(() => {
    axios
      .get('/api/competencies')
      .then(({ data }) => {
        setCompetencies(data);
      })
      .catch();
  }, []);

  
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold bg-gray-300 w-full py-2 text-center'>
        Personnel Page
      </h1>

      <div className='flex gap-4 my-6'>
        <div className='mt-10 bg-white p-2 rounded shadow w-1/3'>
          <h2 className='text-2xl font-semibold mb-2 pb-2 px-2 border-b border-b-dod-900/10'>
            Work Units
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
                    setAssignedLearner(learner);
                  }}
                >
                  {learner.personnel.person.name}
                </button>
              ))}
          </div>
        </div>
        <div className='w-1/3 p-2 mt-6'>
          {assignedLearner && (
            <CompetenciesPieChart
              userId={assignedLearner?.personnel?.person?.personid}
            />
          )}
        </div>
        <div className='mt-10 bg-white p-2  rounded shadow w-1/3'>
          <h2 className='text-2xl font-semibold mb-2 pb-2 px-2 border-b border-b-dod-900/10'>
            Units Snapshot
          </h2>
          <div className='w-full mt-4'>
            {assignedLearner && (
              <EmploymentCourseScatterPlot
                userId={assignedLearner?.personnel?.person?.personid}
              />
            )} 
          </div>
        </div>
      </div>

    <Card title={"Recommended Competencies and Skills"}>
        <Table
            data={competencies}
            cols={comTitles}
            keys={comKeys}
            primaryKey={'competencyid'}
            onClick={handleCompClick}
        />
    </Card>

    <div className='mt-6'></div>
    <Card title={"Recommended Experiences"}>
        <Table
            data={courses}
            cols={columnTitles}
            keys={keys}
            primaryKey={'courselink' || "courseid"}
            onClick={handleClick}
        />
    </Card>

    </DefaultLayout>
  );
}
