import { CSVDownload } from "react-csv";
import { jsPDF } from 'jspdf';
import { useRef, useState } from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DropDownButton from '@/components/DropDownButton';
import Search from '@/components/Search';
import html2canvas from 'html2canvas';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
import PaginationTable from "@/components/common/Table/PaginationTable";
import Table from "@/components/common/Table";

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

  const filterCourses = (courses, query) => {
    if (query.length < 1) { return courses }
    return courses.filter(course => {
      const courseName = course.name.toLowerCase()
      return courseName.includes(query.toLowerCase())
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

  const [startDateValue, setStartDateValue] = useState(null);
  const [endDateValue, setEndDateValue] = useState(null);

  console.log(startDateValue);

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

      <div class="flex flex-row pt-4">
        <div className="pr-5 ">
          <p> Start Date:</p>
          <input datepicker type="date" value={startDateValue} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Select date" selected={startDateValue} onChange={d => setStartDateValue(d.target.value)}/>
          <div className='flex justify-end'>
            <button
              id="startDateClear"
              className='mt-0.5 w-min text-blue-400 hover:text-blue-400 hover:font-bold cursor-pointer text-xs text-right my-2 px-2 hover:underline focus:ring-2 ring-blue-300 outline-none rounded-full -mt-1 focus:text-blue-300 focus-text-shadow'
              title='clear selection'
              onClick={() => {
                setStartDateValue(null)
              }}
            >
              clear
            </button>
          </div>
        </div>
        <div>
          <p> End Date:</p>
          <input datepicker type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Select date" selected={startDateValue} onChange={d => setStartDateValue(d.target.value)}/>
          <div className='flex justify-end'>
            <button
              id="endDateClear"
              className='mt-0.5 w-min text-blue-400 hover:text-blue-400 hover:font-bold cursor-pointer text-xs text-right my-2 px-2 hover:underline focus:ring-2 ring-blue-300 outline-none rounded-full -mt-1 focus:text-blue-300 focus-text-shadow'
              title='clear selection'
              onClick={() => {
                setEndDateValue(null)
              }}
            >
              clear
            </button>
          </div>
        </div>
        <button className='ml-10 mt-6 h-10 inline-flex items-center px-4  mr-2 text-sm font-bold leading-5 text-white transition duration-75 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
          Filter by Date Range
        </button>
      </div>
      <div ref={printRef}>
        {filteredCourses.length > 0 &&
          <PaginationTable
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
