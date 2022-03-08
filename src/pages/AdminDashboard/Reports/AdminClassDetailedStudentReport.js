import React from 'react';
import ProgressBar from '../../../Components/ProgressBar';
import SelectInput from '../../../Components/SelectInput';
import { chapters, quizzes } from '../../../dummyData';
import Button from '../../../YIEUI/Button';

const AdminClassDetailedStudentReport = () => {
  const progress = '50%';

  return (
    <>
      {/* <div className='font-bold text-center'>Student 1, Science, Grade 10, Teacher A</div> */}
      <div className='w-1/2 mt-5 mx-auto'>
      {/* <div className='border w-1/2 mt-5 p-5'> */}
      <div className='font-bold text-center text-xl'>Student 1, Science, Grade 10, Teacher A</div>
        <div className='grid border p-10 mt-5 items-center'>
          <div>
            <div className='flex items-center mb-3'>
              <p>Monthly Aggregate</p>
              <div className='w-2/4 ml-5 '>
                <ProgressBar progress={progress} />
              </div>
            </div>
            <div className='my-5'>
            <SelectInput values={chapters} />
            </div>
            <div className='my-5'>
            <SelectInput values={quizzes} />
            </div>
            <div className='w-3/4'>
              <Button classes='mt-3' variant="outlined">
                GENERATE PERRFORMANCE REPORT
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Button classes='mt-auto ml-auto' variant='filter'>
        Back
      </Button> */}
    </>
  )
}

export default AdminClassDetailedStudentReport