
export default function BorderCard({
    children,
    title,
}) {
    return (
        <div className='rounded shadow p-4 bg-gray-50 my-4 gap-4 print:shadow-none print:border-none'>
            {title?.length > 0 && <h1 className='text-xl pb-4 border-b font-bold '>{title}</h1>}
            <div className='border p-4 rounded-md shadow border-gray-900 print:border-transparent print:shadow-none'>
                {children}
            </div>
        </div>
    );
}
