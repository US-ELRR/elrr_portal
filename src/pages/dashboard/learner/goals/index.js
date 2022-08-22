import Accordion from '@/components/Accordion';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import Tabs from '@/components/Tabs';
import useStore from '@/store/store';
export default function GoalsPage() {
    const handleClick = (id) => {
        router.push(`/dashboard/learner/competencies/${id}`);
    };
    const userData = useStore((state) => state.userData);
    const keys = ['competencyid', 'competencyframeworktitle', 'recordstatus'];
    const cols = ['Competency ID', 'Competency Title', 'Competency Status'];
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
            <Tabs tabNames={tabNames} components={components} />
        </DefaultLayout>
    );
}
