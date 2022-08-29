import useAuthRouter from '@/hooks/useAuthRouter';

export default function AssignedLearners({ learners }) {
  const router = useAuthRouter();
  const handleNavigate = (id) => {
    router.push(`/dashboard/trainingManager/learners/${id}`);
  };
  return (
    <div className='bg-white rounded shadow p-4 flex-1'>
      <h1 className='text-lg text-center font-semibold pb-2 border-b'>
        Assigned Learners
      </h1>
      <div className='grid gap-y-2 '>
        <div className='flex items-baseline font-semibold mt-2 gap-1'>
          <div className='w-1/6'>Id</div>
          <div className='flex-1'>Name</div>
        </div>
        {learners.length > 0 &&
          learners?.map((learner) => (
            <div
              onClick={() => handleNavigate(learner.personnel.person.personid)}
              key={learner.personnel.person.name}
              className='flex items-baseline hover:underline hover:text-dod-100 cursor-pointer gap-1 even:bg-gray-50'
            >
              <div className='w-1/6'>{learner.personnel.person.personid}</div>
              <div className='flex-1'>{learner.personnel.person.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
