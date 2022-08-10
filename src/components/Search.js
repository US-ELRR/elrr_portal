
export default function Search({ handleChange }) {
    return (
        <div className='relative bg-white-900 border-solid border-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="search" placeholder="Search..." className="h-full ml-7 bg-transparent outline-none" onChange={handleChange}></input>
        </div>
    );
}
