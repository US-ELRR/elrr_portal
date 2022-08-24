import { useRouter } from 'next/router';
import Banner from '@/components/common/Header/Banner';
import NavBar from '@/components/common/Header/Navbar';
import useStore from '@/store/store';

export default function Header({ handleLogin }) {
  const { userData, removeUserData } = useStore((state) => state);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
    removeUserData();
  };

  return (
    <header className='bg-gradient-to-t from-dod-900 via-dod-500 to-dod-300 print:hidden'>
      <nav className='max-w-7xl mx-auto'>
        <Banner />
        <NavBar handleLogin={handleLogin} userData={userData} logout={handleLogout} />
      </nav>
    </header>
  );
}
