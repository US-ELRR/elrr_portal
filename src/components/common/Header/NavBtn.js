import { useRouter } from 'next/router';
import Link from 'next/link';

const isActivePath = (path, routerPath) => {
  return routerPath === path;
};

export default function NavBtn({ btn }) {
  const router = useRouter();

  return (
    <Link href={btn.path} key={btn.name} passHref>
      {isActivePath(btn.path, router.asPath) ? (
        <button className='inline-flex items-center px-4 py-2 mr-2 text-sm font-bold leading-5 text-white transition duration-75 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
          {btn.name}
        </button>
      ) : (
        <button className='inline-flex items-center px-4 py-2 mr-2 text-sm font-bold leading-5 text-white transition duration-75 ease-in-out bg-transparent border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
          {btn.name}
        </button>
      )}
    </Link>
  );
}
