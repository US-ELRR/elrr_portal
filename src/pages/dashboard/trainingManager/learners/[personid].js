import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import HistoricalDetailsCard from '@/components/common/HistoricalDetailsCard';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function PersonPage() {
  const isAuthenticated = useAuthRouter();
  const {
    query: { personid },
  } = useRouter();
  const [data, setData] = useState({});
  const userData = useStore((state) => state.userData);
  const router = useRouter();

  useEffect(() => {
    // fetch the data
    if (personid) {
      axios.get(`/api/personnel/${personid}`, {}).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }
  }, [personid]);

  useEffect(() => {
    if (!userData) router.push('/');
  }, [userData]);

  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 '>
        <h1 className='text-3xl font-semibold text-center'>
          {data?.person?.name}
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <DetailsCard
            obj={{
              // ...data?.person,
              Id: data?.person?.personid,
              'Human Resource Identifier':
                data?.person?.humanResourceIdentifier,
              Prefix: data.person?.namePrefix,
              'First Name': data.person?.firstName,
              'Middle Name': data.person?.middleName,
              'Last Name': data.person?.lastName,
            }}
            title='Personnel Data'
            cols={3}
          />
        </div>
        <DetailsCard
          obj={{
            // ...data.contactInformation,
            'Phone Type': data.contactInformation?.telephonenumbertype,
            Phone: data.contactInformation?.telephonenumber,
            'Email Type': data.contactInformation?.electronicmailaddresstype,
            Email: data.contactInformation?.electronicmailaddress,
          }}
          title='Contact Information'
          cols={2}
        />
        <div id='other-details' className='col-span-3'>
          <DetailsCard
            obj={data.organization}
            title='Organization Data'
            cols={3}
          />
          <HistoricalDetailsCard
            key={'employment'}
            objArr={data.employment?.map((e) => ({
              // ...e,
              Id: e.employmentid,
              Employer: e.employerName,
              'Job Level': e.joblevel,
              'Hire Date': e.hiredate,
              'Start Date': e.employmentstartdate,
              'End Date': e.employmentenddate,
              Occupation: e.occupation,
            }))}
            title={'Employments'}
            subtitle={'Employment'}
          />
          <HistoricalDetailsCard
            key={'courses'}
            objArr={data.courses?.map((course) => ({
              // ...course,
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
            title={'Courses'}
            subtitle={'Course'}
          />
          <HistoricalDetailsCard
            key={'competencies'}
            cols={4}
            objArr={data.competencies?.map((competency) => ({
              // ...competency,
              Id: competency.competencyid,
              'Competency Owner': 'Defense Acquisition University',
              'Framework Name': competency.competencyframeworktitle,
              'Framework Version': 'v1.0.3',
            }))}
            title={'Competencies'}
            subtitle={'Competency'}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
