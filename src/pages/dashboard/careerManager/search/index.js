import { Tab } from '@headlessui/react';
import DefaultLayout from '@/components/layouts/DefaultLayout';

export function CareerManagerSearch({ tabs }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className='w-full px-2 pt-4 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-dod-900/[.15] rounded-xl gap-1'>
          {Object.keys(tabs).map((keys) => (
            <Tab
              key={keys}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md leading-5 font-medium text-dod-500 rounded-lg',
                  'focus:outline-none focus:ring-2 shadow-none ring-dod-500 ring-offset-2 transition-all duration-150 ease-in-out',
                  selected
                    ? 'bg-gray-50 shadow shadow-dod-900/50'
                    : 'text-dod-900 hover:bg-gray-200 hover:text-dod-300 hover:shadow-md'
                )
              }
            >
              {keys}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=''>
          {Object.values(tabs).map(({ title, content }) => (
            <Tab.Panel key={title} className={'w-full text-left outline-none'}>
              {content}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

// function Competencies() {
//   const [query, setQuery] = useState({
//     keyword: '',
//     date: '',
//   });

//   const handleChange = (e) => {
//     setQuery({ ...query, [e.target.name]: e.target.value });
//   };
//   return (
//     <div className='flex items-center mt-4 gap-2'>
//       <input
//         className='w-1/3 py-2 px-4 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-dod-500 focus:ring-offset-1 focus:shadow-md focus:shadow-dod-500'
//         type='text'
//         name='keyword'
//         placeholder='Search Competencies'
//         value={query.keyword}
//         onChange={handleChange}
//       />
//       <input
//         className='py-2 px-4 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-dod-500 focus:ring-offset-1 focus:shadow-md focus:shadow-dod-500'
//         type='date'
//         name='date'
//         value={query.date}
//         onChange={handleChange}
//       />
//       <button className='inline-flex items-end px-4 py-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-gray-300 rounded-md hover:bg-dod-700 focus:outline-none focus:shadow-md focus:shadow-dod-500 focus:ring-dod-500 focus:ring-2 ring-offset-1'>
//         Search
//       </button>
//     </div>
//   );
// }

// function SearchLearners() {
//   const [query, setQuery] = useState({
//     keyword: '',
//     date: '',
//     filter: '',
//   });

//   const handleChange = (e) => {
//     setQuery({ ...query, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const getData = useCallback(
//     (e) => {
//       e.preventDefault();
//       axios.get('/api/search', { params: query }).then((res) => {
//         console.dir(res.data);
//       });
//     },
//     [query]
//   );

//   return (
//     <form onSubmit={getData}>
//       <div className='flex items-center mt-4 gap-2'>
//         <input
//           className='w-1/3 py-2 px-4 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-dod-500 focus:ring-offset-1 focus:shadow-md focus:shadow-dod-500'
//           type='text'
//           name='keyword'
//           placeholder='Search Course'
//           value={query.keyword}
//           onChange={handleChange}
//         />
//         <input
//           className='py-2 px-4 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-dod-500 focus:ring-offset-1 focus:shadow-md focus:shadow-dod-500'
//           type='date'
//           name='date'
//           value={query.date}
//           onChange={handleChange}
//         />
//         <select
//           className='py-2 px-4 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-dod-500 focus:ring-offset-1 focus:shadow-md focus:shadow-dod-500'
//           type=''
//           name='filter'
//           value={query.date}
//           onChange={handleChange}
//         >
//           <option value=''>Filter</option>
//         </select>
//         <input
//           type={'submit'}
//           as={'button'}
//           name={'submit'}
//           className='inline-flex items-end px-4 py-2 text-sm font-bold leading-5 text-white transition duration-150 ease-in-out bg-dod-500 border border-gray-300 rounded-md hover:bg-dod-700 focus:outline-none focus:shadow-md focus:shadow-dod-500 focus:ring-dod-500 focus:ring-2 ring-offset-1'
//         />
//       </div>
//     </form>
//   );
// }

export default function ManagerSearchPage() {
  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold'>Search</h1>

      <div className='w-full py-2 text-center flex items-center justify-left gap-2'>
        {/* <Tabs
          tabs={{
            'Search learners by course': {
              content: <SearchLearners />,
            },
            'Search learners by competency': {
              content: <Competencies />,
            },
          }}
        /> */}
      </div>
    </DefaultLayout>
  );
}
