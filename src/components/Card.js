
export default function Card(
    { title, children }
) {
    return (
        <div className='bg-white rounded shadow p-4 flex-1'>
            <h1 className='text-lg text-center font-semibold pb-2 border-b'>
                {title}
            </h1>
            {children}
        </div>
    );
}
