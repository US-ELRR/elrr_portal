export default function Accordion() {
    return (
        <div className="shadow-md w-full md:w-2/3 mx-auto mt-4">
            <div className="overflow-hidden border-t">
                <div className='grid gap-y-2 '>
                    <div className='flex items-baseline font-semibold mt-2 gap-1 border-b'>
                        <div className='w-2/8'>Date</div>
                        <div className='flex-1'>Total Imports</div>
                        <div>Total Failures</div>
                        <div>Endpoint</div>
                    </div>
                </div>
                <label>
                    <input className="absolute opacity-0 peer" type="checkbox" />
                    <p className="p-5 inline-block cursor-pointer w-11/12">	Skill and Roles: Business Skills and Acumen</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer inline-block float-right mt-5 mr-2 peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <div className="flex items-baseline bg-gray-300 max-h-0 peer-checked:max-h-screen">
                        <p className="p-5">
                            09/09/2009
                        </p>
                        <p className="p-5">
                            5
                        </p>
                        <p className="p-5">
                            2
                        </p>
                        <p className="p-5">
                            DAU
                        </p>
                    </div>
                </label>
            </div>

        </div>
    );
}
