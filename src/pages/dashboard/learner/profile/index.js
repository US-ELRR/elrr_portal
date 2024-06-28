
import { learner_url } from '@/config/endpoints';
import { useEffect, useState } from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DetailsCard from '@/components/common/DetailsCard';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';

export default function PersonPage() {
  // user data from the store
  // const userData = useStore((state) => state.userData);

  const [personnelInfo, setpersonnelInfo] = useState(null);

  useEffect(() => {
    axios.get(learner_url+"1")
      .then((response) => {
        setpersonnelInfo(response.data);
      })
      .catch((error) => {
        console.log(error)
        console.log("Courses unable to be loaded. Contact system admin.");
      });
  }, []);

  const {
    query: { },
  } = useAuthRouter();
  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 '>
        <h1 className='text-3xl font-semibold text-center'>
          {personnelInfo?.personnel?.person?.name}
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <DetailsCard
            obj={{
              // ...data?.person,
              Id: personnelInfo?.personnel?.person?.personid,
              'Human Resource Identifier':
                personnelInfo?.personnel?.person?.humanresourceidentifier,
              Prefix: personnelInfo?.personnel?.person?.nameprefix,
              'First Name': personnelInfo?.personnel?.person?.firstname,
              'Middle Name': personnelInfo?.personnel?.person?.middlename,
              'Last Name': personnelInfo?.personnel?.person?.lastname,
            }}
            title='Personnel Data'
            cols={2}
          />
        </div>
        <DetailsCard
          obj={{
            // ...data.contactInformation,
            'Phone Type':
              personnelInfo?.personnel?.contactInformation
                ?.telephonetype,
            Phone:
              personnelInfo?.personnel?.contactInformation?.telephonenumber,
            'Email Type':
              personnelInfo?.personnel?.contactInformation
                ?.electronicmailaddresstype,
            Email:
              personnelInfo?.personnel?.contactInformation
                ?.electronicmailaddress,
          }}
          title='Contact Information'
          cols={2}
        />
        <div id='other-details' className='col-span-3'>
          <DetailsCard
            obj={personnelInfo?.personnel?.organization}
            title='Organization Data'
            cols={3}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
