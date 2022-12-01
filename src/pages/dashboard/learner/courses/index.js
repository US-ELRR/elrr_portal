import { CSVDownload } from "react-csv";
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
  'Course Title',
  'Course ID',
  'Course Provider',
  'Date',
  'Status',
];

const keys = ['name', 'courseid', 'provider','coursestartdate', 'recordstatus'];

export default function CoursesPage() {

  const [searchQuery, setSearchQuery] = useState('')
  const [renderCSVDownload, setRenderCSVDownload] = useState(false)

  const router = useAuthRouter();
  const userData = useStore((state) => state.userData);
  const courses = userData?.learner?.courses

  const filterCourses = (fcourses, query) => {
    if (query.length < 1) { return fcourses }
    return fcourses.filter(course => {
      const courseName = course.name.toLowerCase()
      return courseName.includes(query)
    })
  }

  const filteredCourses = filterCourses(courses, searchQuery) || []
  const printRef = useRef()

  const handleClick = (courselink) => {
    if(courselink){
      router.push(courselink);
    }
  };
  const handleDownloadClick = (item) => {
    if (item === 'PDF') {
      handleDownloadPDF()
    }
    if (item === 'CSV') {
      handleDownloadCSV()
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
  const handleDownloadCSV = () => {
    setRenderCSVDownload(true)
  }
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Courses Page
      </h1>
      {renderCSVDownload && <CSVDownload data={filteredCourses} target="_blank" />}
      <div className='flex justify-between mt-8'>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <DropDownButton handleDownloadClick={handleDownloadClick} buttonText={'Download'} items={['PDF', 'CSV']} />
      </div>
      <div ref={printRef}
      >
        {filteredCourses.length > 0 &&
          <Table
            data={filteredCourses}
            cols={columnTitles}
            keys={keys}
            primaryKey={'courselink'}
            onClick={handleClick}
          />}

      </div>
    </DefaultLayout>
  );
}
