/**
 * Shows a list of completed competencies.
 */

import useAuthRouter from '@/hooks/useAuthRouter';

export default function CompletedCompetencies({ completedCompetencies }) {
  const router = useAuthRouter();
  const handleNavigate = (competencyid) => {
    router.push(`/dashboard/careerManager/competencies/${competencyid}`);
  };

  return (
    <div className='bg-white rounded shadow p-4 flex-1'>
      <h1 className='text-lg text-center font-semibold pb-2 border-b'>
        Completed Competencies
      </h1>
      <div className='grid gap-y-2'>
        {/* table headers */}
        <div className='flex items-baseline font-semibold mt-2'>
          <div className='w-4/6'>Title</div>
          <div>Conferred Date</div>
        </div>
        {completedCompetencies?.length > 0 &&
          completedCompetencies?.map((competency) => (
            <div
              onClick={() => handleNavigate(competency.competencyid)}
              key={competency.competencyframeworktitle}
              className='flex items-baseline hover:underline hover:text-dod-100 cursor-pointer even:bg-gray-50'
            >
              <div className='w-4/6'>{competency.competencyframeworktitle}</div>
              <div className=''>
                {competency.competencyframeworkvalidenddate}
              </div>
            </div>
          ))}
        {completedCompetencies?.length === 0 && (
          <div className='text-center text-gray-500'>
            No competencies completed
          </div>
        )}
      </div>
    </div>
  );
}
