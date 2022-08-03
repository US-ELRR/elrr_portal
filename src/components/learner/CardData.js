export default function CardData({
    objArr,
    subtitle,
    cols,
}) {
    return (

        <div className='grid gap-4'>
            {objArr &&
                objArr.map((employment, index) => {
                    // returns each historical element
                    return (
                        <div
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
    );
}
