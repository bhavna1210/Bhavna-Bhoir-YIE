import React from 'react';
import ProgressBar from '../../../Components/ProgressBar';
import SelectInput from '../../../Components/SelectInput';
import { schoolClasses, sections, subjects } from '../../../dummyData';
import Button from '../../../YIEUI/Button';
import { useNavigate } from 'react-router-dom';


const AdminClassEvaluationsOverall = () => {
  const navigate = useNavigate();
  const progress1 = '40%';
  const progress2 = '70%';
  const progress3 = '60%';

  return (
    <div className='w-3/5 mt-10 mx-auto'>
      <div className='flex items-center justify-between'>
        <div>
          <SelectInput values={schoolClasses} />
        </div>
        <div>
          <SelectInput values={sections} />
        </div>
        <div>
          <SelectInput values={subjects} />
        </div>
        <Button variant="filter">
          Generate Report
        </Button>
      </div>

      {/* class xyz */}
      <div className='border mt-5 p-5'>
        <div className='font-bold text-xl mb-5'>Class XYZ</div>
        <div className='grid grid-cols-2 gap-5 items-center'>
          {/* progress */}
          <div>

            {/* attendance aggregate */}
            <div className='flex items-center mb-3'>
              <p>Attendance Aggregate</p>
              <div className='w-2/4 ml-5 '>
                <ProgressBar progress={progress1} />
              </div>
            </div>
            {/* assessment aggregate */}
            <div className='flex items-center mb-3'>
              <p>Assessment Aggregate</p>
              <div className='w-2/4 ml-5 '>
                <ProgressBar progress={progress2} />
              </div>
            </div>
            {/* quizzes aggregate */}
            <div className='flex items-center mb-3'>
              <p>Quizzes Aggregate</p>
              <div className='w-2/4 ml-5 '>
                <ProgressBar progress={progress3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-3/4'>
        <Button classes='mt-3' variant="outlined" onClick={() => navigate('/adminDashboard/adminClassStudentsReports')}>
          GO TO EVALUATIONS
        </Button>
      </div>
    </div>
  )
}

export default AdminClassEvaluationsOverall