import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../YIEUI/Button';

const AdminReportsNav = () => {
    const navigate = useNavigate();

    const navs = [
        {id:1, nav: 'Attendance', link: '/'},
        {id:1, nav: 'Assessment', link: '/'},
        {id:1, nav: 'Quizzes', link: '/'},
        {id:1, nav: 'Overall', link: '/'},
    ]
  return (
    <div class="flex pt-5  mx-auto w-3/4 justify-center mb-5" role="group">
     
     {
          navs.map(nav => (
            <Button variant="navigation" onClick={() => navigate('/')}>
           {nav.nav}
          </Button>
          ))
      }
      </div>
  )
}

export default AdminReportsNav