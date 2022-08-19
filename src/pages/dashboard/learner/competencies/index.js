import Accordion from '@/components/Accordion';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import Tabs from '@/components/Tabs';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function CompetenciesPage() {
  const userData = useStore((state) => state.userData);
  const keys = ['competencyid', 'competencyframeworktitle', 'recordstatus'];
  const cols = ['Competency ID', 'Competency Title', 'Competency Status'];
  const router = useAuthRouter();

  const handleClick = (id) => {
    router.push(`/dashboard/learner/competencies/${id}`);
  };
  const tabNames = ['Awarded', 'In Progress']
  const components = [<Table
    data={userData?.learner?.competencies}
    cols={cols}
    keys={keys}
    primaryKey={'competencyid'}
    onClick={handleClick}
  />, <Accordion></Accordion>]
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Competencies Page
      </h1>
      <Tabs tabNames={tabNames} components={components} />
    </DefaultLayout>
  );
}
