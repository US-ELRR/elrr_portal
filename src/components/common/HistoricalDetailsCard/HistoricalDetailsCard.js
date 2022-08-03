export default function HistoricalDetailsCard({
    objArr,
    title,
    subtitle,
    cols,
}) {
    return (
        <div className='rounded shadow p-4 bg-gray-50 my-4 gap-4 print:shadow-none print:border-none'>
            <h1 className='text-xl pb-4 border-b font-bold '>{title}</h1>
            <div className='grid gap-4'>
                {objArr &&
                    objArr.map((employment, index) => {
                        // returns each historical element
                        return (
                            <div
                                className='border p-4 rounded-md shadow border-gray-900 print:border-transparent print:shadow-none'
                                key={index}
                            >
                                <h2 className='text-xl font-semibold'>
                                    {subtitle} #{index + 1}
                                </h2>
                                <div className={`grid grid-cols-${cols || 3} gap-4`}>
                                    {Object.keys(employment).map((key) => {
                                        // maps over the keys and returns the keys and values accordingly
                                        return (
                                            <div key={key} className=''>
                                                <div className='font-semibold text-gray-500'>{key}</div>
                                                {employment[key] ? (
                                                    <span className='text-gray-700'>
                                                        {employment[key]}
                                                    </span>
                                                ) : (
                                                    <span className=''>--</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                {objArr?.length === 0 && <div>No data to display</div>}
            </div>
        </div>
    );
}