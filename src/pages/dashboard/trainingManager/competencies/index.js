import { useEffect, useState } from 'react';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';

export default function CompetenciesPage() {
  const [competencies, setCompetencies] = useState([]);
  const keys = ['competencyid', 'competencyframeworktitle', 'recordstatus'];
  const cols = ['Competency ID', 'Competency Title', 'Competency Status'];
  const router = useAuthRouter();

  const handleClick = (id) => {
    router.push(`/dashboard/trainingManager/competencies/${id}`);
  };

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
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Competencies Page
      </h1>
      <Table
        data={competencies}
        cols={cols}
        keys={keys}
        primaryKey={'competencyid'}
        onClick={handleClick}
      />
    </DefaultLayout>
  );
}
