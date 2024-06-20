export default function Footer() {
  return (
    <footer className='max-w-7xl border-t mx-auto px-4 py-2 mt-8 flex justify-between items-end text-sm print:hidden'>
      <div id='copy-right' className='text-sm'>
        <p>
          <span>Copyright &copy; - 2024</span>
        </p>
        <p>
          Disclaimer: The data on this website is for informational purposes
        </p>
      </div>
      <div className='grid grid-cols-4 gap-8'>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            About
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>DOD Home Page</a>
            </li>
            <li>
              <a href='#'>About ADL</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            Policy
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>Web Policy</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
          </ul>
        </div>
        <div className='col-span-1'>
          <h3 className='font-semibold py-2 underline underline-offset-1 text-gray-600'>
            Contact
          </h3>
          <ul className='text-gray-500'>
            <li>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
