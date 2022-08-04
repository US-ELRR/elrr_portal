import Card from '@/components/Card'
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Link from 'next/link';

export default function SystemMonitoring() {
    return (
        <DefaultLayout>
            <Link href="/dashboard">
                <a><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg></a></Link>
            <div className='flex gap-4 mt-10'>
                <Card title={'Current ELRR Configuration'}>
                    <p>Import Frequency: 2 weeks</p>
                    <p>Import Start Time: 00:00 Sunday EST</p>
                    <p>Endpoints in use:</p>
                    <p>Last Import Called:</p>
                </Card>
                <Card title={'ELRR Snapshot'}>
                    <p>Current Number of Indexed Enterprise Learner Records: 750,000</p>
                    <p>Current Number of Unique Learner Profiles: 5,000</p>
                    <p>Current Number of Unique Learning Activities Referenced: 1,200</p>
                    <p>Current Number of Competencies Unique Referenced: 75</p>
                    <p>Number of Errors in Last Import: 15</p>
                </Card>
            </div>
        </DefaultLayout>
    );
}
