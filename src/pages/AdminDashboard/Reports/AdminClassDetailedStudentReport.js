import React from 'react';
import ProgressBar from '../../../Components/ProgressBar';
import SelectInput from '../../../Components/SelectInput';
import { chapters, quizzes } from '../../../dummyData';
import Button from '../../../YIEUI/Button';

const AdminClassDetailedStudentReport = () => {
  const progress = '50%';

  return (
    <>
      <div className='border mt-5 p-5'>
        <div className='font-bold'>Student 1, Science, Grade 10, Teacher A</div>
        {/* top container */}
        <div className='grid items-center'>
          {/* progress */}
          <div>
            {/* monthly aggregate */}
            <div className='flex items-center mb-3'>
              <p>Monthly Aggregate</p>
              <div className='w-2/4 ml-5 '>
                <ProgressBar progress={progress} />
              </div>
            </div>
            <SelectInput values={chapters} />

            <SelectInput values={quizzes} />

            <div className='w-3/4'>
              <Button classes='mt-3' variant="outlined">
                GENERATE PERRFORMANCE REPORT
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button classes='mt-auto ml-auto' variant='filter'>
        Back
      </Button>
    </>
  )
}

export default AdminClassDetailedStudentReport