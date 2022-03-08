import React from 'react'
import ProgressBar from '../../../Components/ProgressBar'
import SelectInput from '../../../Components/SelectInput'
import { schoolClasses, sections, subjects } from '../../../dummyData'
import Button from '../../../YIEUI/Button'
import Input from '../../../YIEUI/Input'


const AdminTeacherEvaluationsOverall = () => {

  const progress = '50%'

  return (
    <div className='w-4/5 mx-auto'>
     <div className='flex items-center justify-evenly'>
     <div>
        <SelectInput values={schoolClasses}/>
      </div>
     <div>
        <SelectInput values={sections}/>
      </div>
      <div className='flex items-center'>
      <Input placeholder='Teacher Name'/>
        <button className='w-full bg-gray-300 py-2 rounded-lg ml-1 hover:bg-gray-400'>
          Show Details
        </button>
      </div>
     </div>

      {/* filter based search */}
      <div className='bg-violet-300  mt-5 p-5'>
    {/* top container */}
    <div className='grid grid-cols-2 gap-5 items-center'>
        {/* progress */}
    <div>

        {/* monthly aggregate */}
        <div className='flex items-center mb-3'>
            <p>Completion Rate</p>
       <div className='w-2/4 ml-5 '>
       <ProgressBar progress={progress}/>
       </div>
        </div>
        {/* assessment completetion */}
        <div className='flex items-center '>
            <a  href="#" className='w-full text-blue-600 underline'>Material Completion</a>
       <div className='w-3/4'>
       <ProgressBar progress={progress}/>
       </div>
        </div>
       
    </div>

    
    </div>

    {/* bottom container */}
    <div className="grid grid-cols-2 gap-5 mt-5">
    <div className='w-3/4'>
    <SelectInput values={subjects}/>
    <Button classes='mt-3' variant="filter">
        Generate Report
    </Button>
    </div>
    <Button classes='mt-auto ml-auto' variant='filter'>
        Back
    </Button>
    </div>

</div>
    </div>
  )
}

export default AdminTeacherEvaluationsOverall