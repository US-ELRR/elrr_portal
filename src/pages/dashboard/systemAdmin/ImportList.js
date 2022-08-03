import BorderCard from '@/components/BorderCard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Link from 'next/link';
import NewTable from '@/components/NewTable';

export default function ImportList() {
    const keys = ['competencyid', 'competencyframeworktitle', 'recordstatus'];
    return (
        <DefaultLayout>
            <Link href="/dashboard">
                <a><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg></a></Link>
            <BorderCard title={'Import List'} >
                <NewTable
                    columnTitles={['Date', 'Total Imports', 'Total Failures', 'Endpoint']}
                    rowsData={
                        [
                            ["09-09-2009", 5, 5, 'UAM'],
                            ["09-09-2099", 5, 1, 'DOD']
                        ]
                    }
                >
                </NewTable>
            </BorderCard>
        </DefaultLayout>
    );
}
