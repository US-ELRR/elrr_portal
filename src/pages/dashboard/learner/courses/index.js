import { jsPDF } from 'jspdf';
import { useRef, useState } from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DropDownButton from '@/components/DropDownButton';
import Search from '@/components/Search';
import Table from '@/components/common/Table';
import html2canvas from 'html2canvas';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
const columnTitles = [
  'Course Code',
  'Course Name',
  'Course Start Date',
  'Course Status',
];

const keys = ['courseid', 'name', 'coursestartdate', 'recordstatus'];

export default function CoursesPage() {
  const [searchField, setSearchField] = useState('')
  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);
  const printRef = useRef()

  const handleClick = (id) => {
    router.push(`/dashboard/learner/courses/${id}`);
  };
  const handleDownloadClick = (item) => {
    if (item === 'PDF') {
      handleDownloadPDF()
    }
  }
  const handleDownloadPDF = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  }
  const handleChange = e => {
    setSearchField(e.target.value);
  };
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Courses Page
      </h1>
      <div className='flex justify-between mt-8'>
        <Search handleChange={handleChange} />
        <DropDownButton handleDownloadClick={handleDownloadClick} buttonText={'Download'} items={['PDF', 'CSV']} />
      </div>
      <div ref={printRef}
      >
        <Table
          filterText={searchField}
          data={userData?.learner?.courses}
          cols={columnTitles}
          keys={keys}
          primaryKey={'courseid'}
          onClick={handleClick}
        />
      </div>
    </DefaultLayout>
  );
}
