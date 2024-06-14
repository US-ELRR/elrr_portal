import BorderCard from '@/components/BorderCard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Link from 'next/link';
import NewTable from '@/components/NewTable';

export default function ImportList() {
    return (
        <DefaultLayout>
            <Link href="/dashboard" legacyBehavior>
                <a><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg></a>
            </Link>
            <BorderCard title={'Import List'} >
                <NewTable
                    columnTitles={['Date', 'Total Imports', 'Total Failures', 'Endpoint']}
                    rowsData={
                        [
                            ["09-07-2022", 840, 1, 'DOD Course Provider'],
                            ["09-07-2022", 1025, 0, 'DAU'],
                            ["09-01-2022", 800, 2, 'DOD Course Provider'],
                            ["09-01-2022", 1050, 2, 'DAU'],
                            ["08-31-2022", 754, 3, 'DOD Course Provider'],
                            ["08-31-2022", 975, 3, 'DAU'],
                            ["08-28-2022", 560, 1, 'DOD Course Provider'],
                            ["08-28-2022", 860, 1, 'DAU']
                        ]
                    }
                >
                </NewTable>
            </BorderCard>
        </DefaultLayout>
    );
}
