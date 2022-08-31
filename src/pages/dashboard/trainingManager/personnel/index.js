import { useEffect, useState } from 'react';
import CompetenciesPieChart from '@/components/manager/career/CompetenciesRadarChart';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
import Card from '@/components/Card';
import NewTable from '@/components/NewTable';
import Button from '@/components/Button';
import Table from '@/components/common/Table';
import axios from 'axios';

export default function Personnel() {
  const router = useAuthRouter();
  const { userData } = useStore();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  
  //Top courses
  const columnTitles = [
    'Course Name',
    'Owner',
    'Course Status',
  ];
  const keys = ['name', 'owner', 'recordstatus'];
  const courses = userData?.learner?.courses;
  const handleClick = (id) => {
    router.push(`/dashboard/trainingManager/courses/${id}`);
  };
  const [assignedLearner, setAssignedLearner] = useState({});

  useEffect(() => {
    // try to show the first user in the assigned learner list
    if (userData?.assigned) {
      setAssignedLearner(userData.assigned[0] || {});
    }
  }, [userData?.assigned]);

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
      <div className='flex gap-4 my-6 mt-10'>
          <Card title={"Assigned learners"}>
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
          </Card>
        {/* </div> */}
        <div className='w-1/3 p-2'>
          {assignedLearner && (
            <CompetenciesPieChart
              userId={assignedLearner?.personnel?.person?.personid}
            />
          )}
        </div>
        <div className='w-1/3 p-2 flex flex-col'>
          <Card title={"Course Recommendations"}>
            <NewTable
                columnTitles={['Title', 'Owner']}
                rowsData={
                    [
                        ["Skill and Roles: Business Skills and Acumen", "Heisenburg"],
                        ["Facilities Capital Cost of Money", "Brown"]
                    ]
                }
            ></NewTable>
            <Button btnText={"Go to ECC"} link={"https://xds.deloitteopenlxp.com"} newTabLink />
          </Card>
        </div>
      </div>
      
    <Card title={"Top Courses"}>
        <Table
            data={courses}
            cols={columnTitles}
            keys={keys}
            primaryKey={'courseid'}
            onClick={handleClick}
        />
    </Card>


    <Card title={"Top Competencies"}>
        <Table
            data={competencies}
            cols={comTitles}
            keys={comKeys}
            primaryKey={'competencyid'}
            onClick={handleCompClick}
        />
    </Card>

    </DefaultLayout>
  );
}
