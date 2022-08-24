import { useEffect, useState } from 'react';

import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';

export default function CompetencyPage() {
  const [goal, setGoal] = useState({});
  const {
    query: { goalid },
  } = useAuthRouter();

  // fetch the data
  useEffect(() => {
    if (!goalid) return;
    axios
      .get(`/api/goals/${goalid}`)
      .then((response) => {
        setGoal(response.data);
      })
      .catch();
  }, [goalid]);

  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold bg-gray-300 w-full py-2 text-center'>
        {goal.goalframeworktitle}
      </h1>
      <DetailsCard obj={goal} title='Goal' cols={3} />
    </DefaultLayout>
  );
}
