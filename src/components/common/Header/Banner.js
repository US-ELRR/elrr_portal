import Image from 'next/image';

import DODlogo from 'src/public/DOD.png';

export function DODImage() {
  return (
    <Image
      src={DODlogo}
      alt='DOD logo'
      width={100}
      height={100}
      layout='fixed'
    />
  );
}

export default function Banner() {
  return (
    <div className='inline-flex justify-left items-center gap-2 py-2 w-full'>
      <DODImage />
      <div className='text-white'>
        <h1 className='font-semibold text-xl'>Enterprise Learner Record Repository</h1>
        <p>U.S. Department of Defense</p>
      </div>
    </div>
  );
}
