import CareerManagerDashboard from '@/components/manager/career/CareerManagerDashboard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import LearnerDashboard from '@/components/learner/LearnerDashboard';
import TrainingManagerDashboard from '@/components/manager/training/TrainingManagerDashboard';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function Dashboard() {
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.role === 'CAREER_MANAGER' && <CareerManagerDashboard />}
      {userData?.role === 'TRAINING_MANAGER' && <TrainingManagerDashboard />}
      {userData?.role === 'LEARNER' && <LearnerDashboard />}
    </DefaultLayout>
  );
}
