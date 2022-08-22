import Accordion from '@/components/Accordion';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import Tabs from '@/components/Tabs';
import useStore from '@/store/store';
export default function GoalsPage() {
    const userData = useStore((state) => state.userData);

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
