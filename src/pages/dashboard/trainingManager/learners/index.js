import DefaultLayout from '@/components/layouts/DefaultLayout';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

// function modifyLearnerDataStructure(learners) {
//   return learners?.map((learner) => ({
//     id: learner.personnel.person.personid,
//     name: learner.personnel.person.name,
//     email: learner.personnel.contactInformation.electronicmailaddress,
//     organization: learner.personnel.organization.organizationdescription,
//   }));
// }

const cols = ['PersonId', 'Name', 'electronicmailaddress', 'Organization'];

export default function Personnel() {
  const router = useAuthRouter();
  const { userData } = useStore();

  // navigate to the users page
  const handleNavigate = (id) => {
    router.push(`/dashboard/trainingManager/learners/${id}`);
  };

  return (
    <DefaultLayout>
      <div className='bg-gray-300 w-full py-2 text-center'>
        <h1 className='text-3xl font-semibold'>Personnel Page</h1>
      </div>

      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle'>
              <div className='shadow ring-1 ring-black ring-opacity-5'>
                <table
                  className='min-w-full border-separate '
                  style={{ borderSpacing: 0 }}
                >
                  <thead className='bg-gray-50 '>
                    <tr>
                      {cols.map((col) => (
                        <th
                          scope='col'
                          className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='bg-white text-left '>
                    {userData?.assigned.length > 0 &&
                      userData?.assigned.map((obj) => (
                        <tr
                          onClick={() =>
                            handleNavigate(obj.personnel.person.personid)
                          }
                          key={obj.personnel.person.personid}
                          name={obj.personnel.person.personid}
                          className='even:bg-gray-50 cursor-pointer group'
                        >
                          {obj.personnel.person.personid ? (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {obj.personnel.person.personid}
                            </td>
                          ) : (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-600 pl-2 py-2 group-hover:text-dod-100'>
                              -
                            </td>
                          )}

                          {obj.personnel.person.name ? (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {obj.personnel.person.name}
                            </td>
                          ) : (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-600 pl-2 py-2 group-hover:text-dod-100'>
                              -
                            </td>
                          )}

                          {obj.personnel.contactInformation
                            .electronicmailaddress ? (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {
                                obj.personnel.contactInformation
                                  .electronicmailaddress
                              }
                            </td>
                          ) : (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-600 pl-2 py-2 group-hover:text-dod-100'>
                              -
                            </td>
                          )}

                          {obj.personnel.organization.organizationname ? (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                              {obj.personnel.organization.organizationname}
                            </td>
                          ) : (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-600 pl-2 py-2 group-hover:text-dod-100'>
                              -
                            </td>
                          )}
                        </tr>
                      ))}
                  </tbody>
                </table>
                {userData?.assigned.length === 0 && (
                  <div className='text-center text-gray-600 w-full'>
                    No personnel data found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
