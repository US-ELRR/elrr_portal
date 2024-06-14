import Button from '@/components/Button'
import Card from '@/components/Card';
import NewTable from '@/components/NewTable';

export default function TrainingManagerDashboard() {

  return (
    <>
      {/* <Banner user={userData?.learner.personnel.person} /> */}
      <div className='flex gap-4 mt-10'>
        <Card title={"Course Snapshot (Last 30 Days)"}>
            <NewTable
                columnTitles={['Course Title', 'Course Provider', 'Status']}
                rowsData={
                  [ 
                    ["Business Essentials", "DAU", "Registered"], 
                    ["Supervisory Contracting",  "DAU", "Scheduled"], 
                    ["Motivational Interviewing",  "DoD Course Provider", "Completed"], 
                    ["Market Research",  "DAU", "Completed"], 
                ]

                }
            ></NewTable>
        </Card>
        <Card title={"Course Recommendations"}>
            <NewTable
                columnTitles={['Title', 'Owner']}
                rowsData={
                    [ 
                      [<a href="https://dev-xds.deloitteopenlxp.com/course/e327577d5b35749b5a68bdbd1eec8b109159e80e14a10842fa8a903ecd3c3094553064d027271012504711fdd904d9744fd672897639745c3c102354b69a9412>"> Supervisory Contracting </a>, "DAU" ], 
                      [<a href="https://dev-xds.deloitteopenlxp.com/course/b20d2182ccb1cd09dabd2c1c1e8628df0085786a762d161380cb1fcc0a3f073b7561734cf8dc8979468e568ea974eacad2741e3c97e2510ca0fbab9cdc07e19e"> Innovation in Military Organizations </a>, "DoD Course Provider" ], 
                      [<a href=" https://dev-xds.deloitteopenlxp.com/course/b91ec10ed3075b167f5f868b7a2e6dae44d425025ff46a7456cb3ef9e7e025f7c5dcf5de3a264bde1f3b5ef093494e4b85eeb043ac7337f27adf87f35cc2ea16"> Cost Realism Analysis</a>, "DAU" ], 
                      [<a href="https://dev-xds.deloitteopenlxp.com/course/161d68c114374a025e53e8bb7e3cd8fef0c37d6fc7d03b08e4c4fbafd2e78a3ce17eb9d952ce732ff841879045096b2bce6ae3d7073d698e5902ee569ec04e76"> Sole Source Technical Evaluations</a>, "DAU" ], 
                      [<a href="https://dev-xds.deloitteopenlxp.com/course/3b42eb266fb1995fd366d59883e273d850d0584634113ffa816a9760677335492caaaefe911c4239cb5589ae67d443ec7ce5dc4387c32566b860808e53c1d4e0"> Applied Business Analysis Techniques</a>, "DoD Course Provider"] 
                    ]
                }
            ></NewTable>
            <div className='flex justify-end'>
              <Button btnText={"Go to ECC"} link={"https://dev-xds.deloitteopenlxp.com"} newTabLink />
            </div>
        </Card>
      </div>
    </>
  );
}
