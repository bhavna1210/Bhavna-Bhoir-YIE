import React from 'react'
import ProgressBar from '../../../Components/ProgressBar'
import SelectInput from '../../../Components/SelectInput'
import { schoolClasses, sections, subjects } from '../../../dummyData'
import Button from '../../../YIEUI/Button'

const AdminReportOverall = () => {
    const progress = '45%'
  return (
    <div className='bg-violet-300 w-4/5 mx-auto mt-5 p-5'>
        {/* top container */}
        <div className='grid grid-cols-2 gap-5 items-center'>
            {/* progress */}
        <div>

            {/* monthly aggregate */}
            <div className='flex items-center mb-3'>
                <p>Monthly Aggregate</p>
           <div className='w-2/4 ml-5 '>
           <ProgressBar progress={progress}/>
           </div>
            </div>
            {/* assessment completetion */}
            <div className='flex items-center '>
                <a  href="#" className='w-full text-blue-600 underline'>Assessment Completetion</a>
           <div className='w-3/4'>
           <ProgressBar progress={progress}/>
           </div>
            </div>
           
        </div>

        {/* selection */}
        <div>
            <SelectInput values={schoolClasses}/>
            <SelectInput values={sections}/>
            <Button classes='mt-3 ' variant="filter">
                Go
            </Button>
        </div>
        </div>

        {/* bottom container */}
        <div className="grid grid-cols-2 gap-5">
        <div className='w-3/4'>
        <SelectInput values={subjects}/>
        <Button classes='mt-3' variant="filter">
            Generate Student Report
        </Button>
        </div>
        <Button classes='mt-auto ml-auto' variant='filter'>
            Back
        </Button>
        </div>

    </div>
  )
}

export default AdminReportOverall