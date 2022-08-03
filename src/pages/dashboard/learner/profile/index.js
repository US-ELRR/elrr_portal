import BorderCard from '@/components/BorderCard';
import CardData from '@/components/learner/CardData';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function PersonPage() {
  // user data from the store
  const userData = useStore((state) => state.userData);

  const {
    query: { },
  } = useAuthRouter();
  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 '>
        <h1 className='text-3xl font-semibold text-center'>
          {userData?.learner?.personnel?.person?.name}
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <DetailsCard
            obj={{
              // ...data?.person,
              Id: userData?.learner?.personnel?.person?.personid,
              'Human Resource Identifier':
                userData?.learner?.personnel?.person?.humanResourceIdentifier,
              Prefix: userData?.learner?.personnel?.person?.namePrefix,
              'First Name': userData?.learner?.personnel?.person?.firstName,
              'Middle Name': userData?.learner?.personnel?.person?.middleName,
              'Last Name': userData?.learner?.personnel?.person?.lastName,
            }}
            title='Personnel Data'
            cols={2}
          />
        </div>
        <DetailsCard
          obj={{
            // ...data.contactInformation,
            'Phone Type':
              userData?.learner?.personnel?.contactInformation
                ?.telephonenumbertype,
            Phone:
              userData?.learner?.personnel?.contactInformation?.telephonenumber,
            'Email Type':
              userData?.learner?.personnel?.contactInformation
                ?.electronicmailaddresstype,
            Email:
              userData?.learner?.personnel?.contactInformation
                ?.electronicmailaddress,
          }}
          title='Contact Information'
          cols={2}
        />
        <div id='other-details' className='col-span-3'>
          <DetailsCard
            obj={userData?.learner?.personnel?.organization}
            title='Organization Data'
            cols={3}
          />

          <BorderCard title={'Courses'}>
            <CardData
              key={'courses'}
              objArr={userData?.learner?.courses.map((course) => ({
                //...course,
                Id: course.courseid,
                'Course Provider': course.courseprovidername,
                'Course Name': course.name,
                'Course Identifier': course.courseidentifier,
                'Course Level': course.courselevel,
                'Course Instruction Mode': course.courseinstructionmethod,
                'Course Department': course.departmentname,
                'Start Date': course.coursestartdate,
                'End Date': course.courseenddate,
                'Enrollment Date': course.courseenrollmentdate,
              }))}
              subtitle={'Course'}
            />

          </BorderCard>
          <BorderCard title={'Competencies'}>
            <CardData
              key={'competencies'}
              cols={4}
              objArr={userData?.learner?.competencies.map((competency) => ({
                // ...competency,
                Id: competency.competencyid,
                'Competency Owner': 'Defense Acquisition University',
                'Framework Name': competency.competencyframeworktitle,
                'Framework Version': 'v1.0.3',
              }))}
              subtitle={'Competency'} />


          </BorderCard>
        </div>
      </div>
    </DefaultLayout>
  );
}
