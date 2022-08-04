import Link from 'next/link';

export default function Button({ btnText, link, newTabLink }) {

    return (
        <Link href={link} key={btnText} passHref>
            <a target={newTabLink ? "_blank" : "_self"}>
                <button className='mt-4 inline-flex items-center px-4 py-2 mr-2 text-sm font-bold leading-5 text-white transition duration-75 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
                    {btnText}
                </button>
            </a>

        </Link>
    );
}
