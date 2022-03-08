import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../YIEUI/Button';

const AdminReports = () => {
    const navigate = useNavigate();
  const navs = [
      {id:1, nav: 'School Admin Report', link: '/adminDashboard/schoolAdminReport'},
      {id:2, nav: 'Teacher Evaluations', link: '/'},
      {id:3, nav: 'Class Evaluations', link: '/adminDashboard/adminClassEvaluationsReport'},
  ]
  return (
    <div className='w-1/3 ml-10 mt-5'>
   {
       navs.map(nav => (
        <Button classes='mb-2' key={nav.id} variant="outlined" onClick={() => navigate(nav.link)}>{nav.nav}</Button>
       ))
   }
      
    </div>
  )
}

export default AdminReports