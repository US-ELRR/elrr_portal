import Link from "next/link";

export default function LoggedOutNavbar() {
  return (
    <div className='inline-flex text-white w-full py-2 justify-end items-center'>
      <Link href='/' passHref>
        <button className='inline-flex items-end px-4 py-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
          login
        </button>
      </Link>
    </div>
  );
}
