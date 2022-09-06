import Accordion from '@/components/Accordion';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import Tabs from '@/components/Tabs';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function GoalsPage() {
    const router = useAuthRouter();

    const handleClick = (id) => {
        router.push(`/dashboard/trainingManager/goals/${id}`);
    };
    const userData = useStore((state) => state.userData);
    const keys = ['goalid', 'goalframeworktitle', 'recordstatus'];
    const cols = ['Goal ID', 'Goal Title', 'Goal Status'];
    const tabNames = ['Awarded', 'In Progress']
    const components = [<Table
        data={userData?.learner?.goals}
        cols={cols}
        keys={keys}
        primaryKey={'goalid'}
        onClick={handleClick}
    />, <Accordion></Accordion>]
    return (
        <DefaultLayout>
            <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
                Goals Page
            </h1>
            <Tabs tabNames={tabNames} components={components} />
        </DefaultLayout>
    );
}
