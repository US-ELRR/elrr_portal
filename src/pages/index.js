// intial login page for the app
// all users must come here first before they can access the app

import { useEffect, useState } from 'react';
import DODImage from '@/public/DOD.png';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import axios from 'axios';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function LoginPage() {
  const router = useAuthRouter();
  const { userData, setUserData } = useStore((state) => state);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleUpdate = (e) => {
    setCredentials((previous) => ({
      ...previous,
      [e.target.name]: e.target.value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('/api/login', { ...credentials })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        router.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (userData) router.push('/dashboard');
  }, [userData]);

  return (
    <DefaultLayout>
      <div className='flex flex-col justify-center items-center gap-8'>
        <Image src={DODImage} alt='DOD' width={200} height={200} />
        <h1 className='text-center text-2xl font-bold text-gray-800'>
          Welcome to the Enterprise Learner Record Repository
        </h1>
      </div>
      <form
        className='flex justify-center flex-col items-center mt-10 gap-4 my-10'>
        <div className='grid gap-2'>
          <input
            onChange={handleUpdate}
            name='username'
            type='text'
            placeholder='username'
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500 sm:text-sm'
          />
          <input
            onChange={handleUpdate}
            name='password'
            type='password'
            placeholder='password'
            className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500 sm:text-sm'
          />
        </div>
        <p>Sign-in Using Common Access Card (CAC)</p>
        <button
          onClick={handleLogin}
          className='mt-3 px-6 bg-dod-500 text-white font-bold py-2 rounded hover:bg-dod-300 focus:outline-none  focus:ring-dod-500 focus:shadow-outline-dod focus:ring-2 ring-offset-1'
        >
          Login
        </button>
        <span className='mt-3 text-gray-500 text-sm font-bold'>
          Trouble logging in? Please contact your IT department
        </span>
      </form>
    </DefaultLayout>
  );
}
