import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from './backend';
import './loginOptions.css';

function LoginVendor() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = authenticateUser(email, password, 'vendor');
    if (user) {
      navigate('/vendor');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        EcoCup Vendor Login
        <div className='title'>Enter your ID and password</div>

        <label htmlFor="email">Enter your ID</label>
        <input
          type='email'
          id="email"
          placeholder='Enter your ID'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          type='password'
          id="password"
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Log in</button>
        <div className='backToLogin' onClick={() => navigate('/')}>Back to login options</div>
      </div>
    </div>
  );
}

export default LoginVendor;