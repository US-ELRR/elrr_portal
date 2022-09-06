import Button from '@/components/Button'
import Card from '@/components/Card';
import NewTable from '@/components/NewTable';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function TrainingManagerDashboard() {
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  const handleNavigate = (course) => {
    router.push(`/dashboard/trainingManager/courses/${course.courseid}`);
  };

  return (
    <>
      {/* <Banner user={userData?.learner.personnel.person} /> */}
      <div className='flex gap-4 mt-10'>
        <Card title={"Course Snapshot (Last 30 Days)"}>
            <NewTable
                columnTitles={['Course Identifier', 'Course Name', 'Status']}
                rowsData={
                  [
                      ["CLC 103", "Facilities Capital Cost of Money", 'In progress'],
                      ["CLC 104", "Facilities Capital Cost of Employees", 'Enrolled']
                  ]
                }
            ></NewTable>
        </Card>
        <Card title={"Course Recommendations"}>
            <NewTable
                columnTitles={['Title', 'Owner']}
                rowsData={
                    [
                        ["Skill and Roles: Business Skills and Acumen", "Heisenburg"]
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
