/**
 *
 * Table component
 * @note on click requires a function to be passed in and the name of the primary key
 * @returns
 */

import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from '@heroicons/react/solid';
import {useEffect, useState } from 'react';
  
  export default function PaginationTable({
    cols,
    keys,
    filteredData,
    primaryKey,
    onClick = () => { }, 
  }) {

    const [data, setData] = useState(filteredData);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(data?.length/25));
    const [lowerBound, setLowerBound] = useState(1);
    const [upperBound, setUpperBound] = useState(25);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setTotalPages(Math.ceil(data?.length/25));
        setUpperBound(25);
        if (data?.length<upperBound){
            setUpperBound(data?.length);
        }
    }, [data?.length, reload]);


    if (data?.length<upperBound){
        setUpperBound(data.length);
    }

    const handleSpecificPage = (e) => {
        console.log(e)
        setCurrentPage(e);
        setLowerBound((e-1)*25+1);
        setUpperBound(e*25);

        if (e===1){
            setLowerBound(1);
        }

        if (data.length<upperBound){
            setUpperBound(data.length);
        }
        
    }
  
    // show the first three pages and the last three pages of the pagination
    // if the total number of pages is less than 3 show them all
    const pages = [];
  
    // if the minimum number of pages to show is less than one, show just the first page
    // otherwise show the minimum number of pages before the current page
    const start = Math.max(1, Math.min(currentPage - 2, currentPage - 3));
  
    // if possible show the 3 pages after the current page
    const end = Math.min(totalPages, currentPage + 3);
  
    // if the total number of pages is less than 6 show all pages
    // *centers the pages arond the current page*
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    const returnLable = (col) => {
      let sortValue = ""
      if (col === "Course Title"){
        sortValue = 'name';
      }
      else if (col === "Course ID"){
        sortValue = 'courseid';
      }
      else if (col === "Course Provider"){
        sortValue = 'coursemetadatarepository';
      }
      else if (col === "Date"){
        sortValue = 'coursestartdate';
      }
      else if (col === "Status"){
        sortValue = 'recordstatus';
      }

      setData(data.sort(compareValues(sortValue)));
      setReload(!reload);
    }

    function compareValues(key, order = 'asc') {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }
    
        const varA = (typeof a[key] === 'string')
          ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
          ? b[key].toUpperCase() : b[key];
    
        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    }
  
    return (
      <>
        <div className='flex flex-col mb-4'>
          <p className="flex justify-end py-2"> Showing results <div className="font-bold px-1">{lowerBound}</div> to <div className="font-bold px-1">{upperBound}</div> out of <div className="font-bold px-1">{data?.length}</div></p>
          <div className='px-4 sm:px-6 lg:px-8 -my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle'>
              <div className='shadow ring-1 ring-black ring-opacity-5'>
                <table
                  className='min-w-full border-separate '
                  style={{ borderSpacing: 0 }}
                >
                  <thead className='bg-gray-50 '>
                    <tr>
                      {cols.map((col, index) => (
                        <th
                          key={index}
                          scope='col'
                          className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                        >
                          <div className="flex flex-row ">
                            {col}
                            <button onClick={()=>{returnLable(col)}}>
                              <a href="#" >
                                <svg className="ml-1 w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                </svg>
                              </a>
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='bg-white text-left '>
                    {data?.length > 0 &&
                      data.slice(lowerBound-1, upperBound).map((item, index) => {
                        return (
                          <tr
                            key={index}
                            name={item.name}
                            className='hover:text-dod-100 even:bg-gray-50 group cursor-pointer'
                            onClick={() => onClick(item[primaryKey])}
                          >
                            {keys.map((key, index) => (
                              <td key={index} className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
                                {item[key] || '-'}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                {data?.length === 0 && (
                  <div className='text-center text-gray-600 w-full'>
                    No data found
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* pagination of the table */}
        <div className='flex flex-row justify-between'>
        <div className='inline-flex justify-left items-center gap-2'>
          <button
            onClick={() => handleSpecificPage(1)}
            title='First'
            className={`disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 text-blue-400 rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-400 hover:text-white px-2 py-2 transform transition-all duration-150 ease-in-out border-blue-300 border-2 outline-none focus:ring-2 ring-blue-300`}
            disabled={currentPage === 1 ? true : false}
          >
            <ChevronDoubleLeftIcon className='h-6 w-6' />
          </button>
  
          <button
            onClick={() => handleSpecificPage(currentPage - 1)}
            className={`disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 text-blue-400 rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-400 hover:text-white pl-2 pr-4 py-2 transform transition-all duration-150 ease-in-out border-blue-300 border-2 outline-none focus:ring-2 ring-blue-300`}
            disabled={currentPage === 1 ? true : false}
          >
            <ChevronLeftIcon className='h-6 w-6' />
            Previous
          </button>
        </div>
  
        <div className='inline-flex justify-center items-center gap-2'>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handleSpecificPage(page)}
              className={`${
                currentPage === page
                  ? 'bg-blue-400 text-white'
                  : 'bg-blue-50 text-blue-400'
              } flex justify-center items-center gap-2 rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-400 hover:text-white px-2 py-2 transform transition-all duration-150 ease-in-out border-blue-300 border-2 outline-none focus:ring-2 ring-blue-300`}
            >
              {page}
            </button>
          ))}
        </div>
  
        <div className='inline-flex justify-left items-center gap-2'>
          <button
            onClick={() => handleSpecificPage(currentPage + 1)}
            className={`disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 text-blue-400 rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-400 hover:text-white pl-4 pr-2 py-2 transform transition-all duration-150 ease-in-out border-blue-300 border-2 outline-none focus:ring-2 ring-blue-300`}
            disabled={totalPages <= currentPage ? true : false}
          >
            Next
            <ChevronRightIcon className='h-6 w-6' />
          </button>
          <button
            title='Last'
            onClick={() => handleSpecificPage(totalPages)}
            disabled={totalPages <= currentPage ? true : false}
            className={`disabled:saturate-0 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-inherit flex justify-center items-center gap-2 text-blue-400 rounded-md hover:shadow-md bg-blue-50 hover:bg-blue-400 hover:text-white p-2 py-2 transform transition-all duration-150 ease-in-out border-blue-300 border-2 outline-none focus:ring-2 ring-blue-300`}
          >
            <ChevronDoubleRightIcon className='h-6 w-6' />
          </button>
        </div>
      </div>
      </>
    );
  }
  