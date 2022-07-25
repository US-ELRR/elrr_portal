import Link from 'next/link';

export default function Banner({ user }) {
  return (
    <div className='bg-gray-300 w-full py-2 text-center'>
      <h1 className='text-3xl font-semibold'>
        Welcome {user?.name} to the Enterprise Learner Record Repository&nbsp;
        <strong>(ELRR)</strong>
      </h1>
      {/* Link to their profile */}
      <Link href='/dashboard/careerManager/personnel' passHref>
        <button className='mt-2 inline-flex items-end px-4 py-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
          View Personnel
        </button>
      </Link>
    </div>
  );
}
