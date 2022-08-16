import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { MainLayout } from '~/components/MainLayout';

const List = () => {
  const router = useRouter();

  const addForm = () => {
    router.push('/form');
  }

  useEffect(() => {
    const data = localStorage.getItem('X-Data-Form');
    console.log('data', data)
  }, [])

  return (
    <MainLayout page="List">
      <div className="w-full p-6">
        {/* <h1 className='font-bold text-xl mb-5'>List Penerima Bansos</h1> */}
        <div className="content-title-container flex mobile:block">
          <h1 className="text-2xl font-semibold flex-1 mb-0 mobile:mb-2">List Penerima Bansos</h1>
          <button type='button' className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10" onClick={addForm} >Add</button>
        </div>
        {/* <hr /> */}
        <>
          <div className="block min-w-full shadow rounded-lg overflow-x-auto whitespace-nowrap">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    key={1}
                    className="px-5 py-3 border-[#5467B0] bg-[#5467B0] text-sm font-medium text-white uppercase tracking-wider text-center rounded-tl-lg"
                  >
                    No
                  </th>
                  <th
                    key={11}
                    className="px-5 py-3 border-[#5467B0] bg-[#5467B0] text-sm font-medium text-white uppercase tracking-wider text-center"
                  >
                    Nama
                  </th>
                  <th
                    key={12}
                    className="px-5 py-3 border-[#5467B0] bg-[#5467B0] text-sm font-medium text-white uppercase tracking-wider text-center rounded-tr-lg"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="relative h-auto">
                <tr key={21}>
                  <td
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                    key={211}
                  >
                    <p className="text-gray-900 whitespace-no-wrap">1</p>
                  </td>
                  <td
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                    key={212}
                  >
                    <p className="text-gray-900 whitespace-no-wrap">-</p>
                  </td>
                  <td
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center"
                    key={213}
                  >
                    <p className="text-gray-900 whitespace-no-wrap">
                      <button type='button' className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3">Preview</button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      </div>
    </MainLayout>
  )
}

export default List;
