/**
 *
 * Table component
 * @note on click requires a function to be passed in and the name of the primary key
 * @returns
 */

export default function Table({
  cols,
  keys,
  data,
  primaryKey,
  onClick = () => {},
}) {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle'>
            <div className='shadow ring-1 ring-black ring-opacity-5'>
              <table
                className='min-w-full border-separate '
                style={{ borderSpacing: 0 }}
              >
                <thead className='bg-gray-50 '>
                  <tr>
                    {cols.map((col) => (
                      <th
                        scope='col'
                        className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='bg-white text-left '>
                  {data?.length > 0 &&
                    data.map((item) => {
                      return (
                        <tr
                          key={item.name}
                          name={item.name}
                          className='hover:text-dod-100 even:bg-gray-50 cursor-pointer group'
                          onClick={() => onClick(item[primaryKey])}
                        >
                          {keys.map((key) => (
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2 group-hover:text-dod-100'>
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
    </div>
  );
}
