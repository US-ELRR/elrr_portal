import CareerManagerDashboard from '@/components/manager/career/CareerManagerDashboard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import LearnerDashboard from '@/pages/dashboard/learner/LearnerDashboard';
import SystemAdminDashboard from '@/components/admin/SystemAdminDashboard';
import TrainingManagerDashboard from '@/components/manager/training/TrainingManagerDashboard';
import useStore from '@/store/store';

export default function Dashboard() {
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.role === 'CAREER_MANAGER' && <CareerManagerDashboard />}
      {userData?.role === 'TRAINING_MANAGER' && <TrainingManagerDashboard />}
      {userData?.role === 'LEARNER' && <LearnerDashboard />}
      {userData?.role === 'SYSTEM_ADMIN' && <SystemAdminDashboard />}
    </DefaultLayout>
  );
}
