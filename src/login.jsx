import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Loginpg() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='header'>EcoCup Login
        <div className='title'>Choose your login type</div>
        <div className='buttons'>
          <div className='containerOptions' onClick={() => navigate('/login/student')}>Student</div>
          <div className='containerOptions' onClick={() => navigate('/login/vendor')}>Vendor</div>
          <div className='containerOptions' onClick={() => navigate('/login/admin')}>Admin</div>
        </div>
      </div>
    </div>
  );
}

export default Loginpg;