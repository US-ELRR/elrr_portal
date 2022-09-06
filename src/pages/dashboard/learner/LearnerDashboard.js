import Banner from '@/components/Banner';
import Button from '@/components/Button'
import Card from '@/components/Card';
import NewTable from '@/components/NewTable';
import useStore from '@/store/store';
import useAuthRouter from '@/hooks/useAuthRouter';


export default function LearnerDashboard() {
    const router = useAuthRouter();
    const userData = useStore((state) => state.userData);
    return (
        <>
            <Banner user={userData} />
            <div className='flex gap-4 mt-10'>
                <Card title={"Course Snapshot (Last 30 Days)"}>
                    <NewTable
                        columnTitles={['Course Title', 'Course Provider', 'Status']}
                        rowsData={
                            [
                                ["Business Essentials", "DAU", "Completed"],
                                ["Organization Theory & the Military",  "DoD Course Provider", "Registered"],
                                ["Supervisory Contracting",  "DAU", "Scheduled"],
                                ["Innovation in Military Organizations",  "DoD Course Provider", "Completed"],
                                ["Stakeholder Management",  "DAU", "Completed"],
                            ]
                        }
                    ></NewTable>
                </Card>
                <Card title={"Course Recommendations"}>
                    <NewTable
                        columnTitles={['Title', 'Owner']}
                        rowsData={
                            [
                                [<a href="https://xds.deloitteopenelrr.com/course/9c37ed6227ac3444f15f19b52b01e3b920973594e7551509d36d20b9747d04d17791effc9130f1b28750c6405e63f2ae6eff56812de4804dea2be6b27ae092c3"> Building Trust </a>, "DAU" ],
                                [<a href="https://xds.deloitteopenelrr.com/course/e0cb6679a9f8670a103f82c2fedfb815f03fc25870060a50b27276dc6ef028b8014e5c4e54ceb1e213fb10dd3e8db97d41ce9ce91784e2965970ab00727676e9"> Acquisition Actions </a>, "DAU" ],
                                [<a href="https://xds.deloitteopenelrr.com/course/819dc29bc8adfa457e4386e61595e4dc98ded068110c6c67e6fb581652b1e48f51e4469dabc9ee3d16e72b253a11cd4558d0810d5338e530a58b26195a90d1d3"> Monitoring the Global Private Military and Security Industry </a>, "DoD Course Provider" ],
                                [<a href="https://xds.deloitteopenelrr.com/course/3287fb2954cd03eed1ee88a0a52858372b1d4f8225690d05bd0dfa4c0d7835a82ebae4cb58998c8df093b8edb51f9ba7443661bfd08d6d9729342e0851131138">Competition in Contracting </a>, "DAU" ],
                                [<a href="https://xds.deloitteopenelrr.com/course/8b46341e71793abed5190b49a9d804df8f45726a7456e5acb84eac261b18c8e89592bdd69f363594cd0fab8fd9a69ed99422ce7ad5c61f115e9a50bf2e2f8454">IT Process Dynamics and Controls</a>, "DoD Course Provider"]
                            ]
                        }
                    ></NewTable>
                    <div className='flex justify-end'>
                        <Button btnText={"Go to ECC"} link={"https://xds.deloitteopenelrr.com"} newTabLink />
                    </div>
                </Card>
            </div>
        </>
    );
}
