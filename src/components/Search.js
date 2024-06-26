
export default function Search({ searchQuery, setSearchQuery }) {
    return (
        <div className="relative w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-2 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
                value={searchQuery}
                type="search"
                placeholder="Search..."
                className="h-full pl-7 bg-transparent outline-none w-full"
                onInput={e => setSearchQuery(e.target.value)}
            />
        </div>
    );
}
