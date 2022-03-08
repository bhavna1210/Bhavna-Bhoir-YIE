import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminClassStudentsReports = () => {
    const navigate = useNavigate();
    const navs = [
        {id:1, nav: 'Attendance', link: '/'},
        {id:1, nav: 'Assessment', link: '/'},
        {id:1, nav: 'Quizzes', link: '/'},
        {id:1, nav: 'Overall', link: '/'},
    ]
    return (
        <>
        <div class="flex pt-5  mx-auto w-3/4 justify-center mb-5" role="group">
     
     {
          navs.map(nav => (
            <Button variant="navigation" onClick={() => navigate('/')}>
           {nav.nav}
          </Button>
          ))
      }
      </div>
            <div className='border border-slate-900 mx-8 flex max-w-min p-1'>
                <div className='flex flex-col m-5'>
                    <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                        <div className='inline-block py-2 min-w-full sm:px-6 lg:px-8'>
                            <div className='overflow-hidden shadow-md sm:rounded-lg'>
                                <table className='min-w-full mx-5'>
                                    <thead className='bg-gray-50 dark:bg-gray-700'>
                                        <tr>
                                            <th
                                                scope='col'
                                                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                                                Name
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                                                Assessment
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                                                Date
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                                                Time Taken
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                                                Score
                                            </th>
                                            <th
                                                scope='col'
                                                className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'>
                                                Report
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white' onClick={() => navigate('/adminDashboard/AdminClassDetailedStudentReport')}>
                                                Student 1
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Matter
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                10/09/21
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                1 Day
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                9/10
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Report
                                            </td>
                                        </tr>
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white' onClick={() => navigate('/adminDashboard/AdminClassDetailedStudentReport')}>
                                                Student 2
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Matter
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                10/09/21
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                1 Day
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                9/10
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Report
                                            </td>
                                        </tr>
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white' onClick={() => navigate('/adminDashboard/AdminClassDetailedStudentReport')}>
                                                Student 3
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Matter
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                10/09/21
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                1 Day
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                9/10
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Report
                                            </td>
                                        </tr>
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white' onClick={() => navigate('/adminDashboard/AdminClassDetailedStudentReport')}>
                                                Student 4
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Matter
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                10/09/21
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                1 Day
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                9/10
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Report
                                            </td>
                                        </tr>
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white' onClick={() => navigate('/adminDashboard/AdminClassDetailedStudentReport')}>
                                                Student 5
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Matter
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                10/09/21
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                1 Day
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                9/10
                                            </td>
                                            <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
                                                Report
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------------------------------------table end--------------------- */}
            </div>
        </>
    )
}

export default AdminClassStudentsReports