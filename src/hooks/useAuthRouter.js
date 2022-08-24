import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useStore from '@/store/store';

/**
 * wseAuthRouter hook to redirect to login page if user is not logged. Provides router object otherwise.
 */

export default function useAuthRouter() {
  const userData = useStore((store) => store.userData);

  const router = useRouter();
  useEffect(() => {
    if (!userData) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAuthenticated: !!userData, ...router };
}
