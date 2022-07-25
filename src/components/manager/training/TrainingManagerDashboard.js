import AssignedLearners from './AssignedLearners';
import Banner from '@/components/manager/common/Banner';
import CompletedCompetencies from '../common/CompletedCompetencies';
import EnrolledCourses from '../common/EnrolledCourses';
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
      <Banner user={userData?.learner.personnel.person} />
      <div className='flex gap-4 mt-10'>
        <EnrolledCourses
          courses={userData?.learner.courses}
          handleNavigate={handleNavigate}
        />

        <CompletedCompetencies
          completedCompetencies={userData?.learner.competencies}
        />
        <AssignedLearners learners={userData?.assigned} />
      </div>
    </>
  );
}
