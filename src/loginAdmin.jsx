import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from './backend';
import './loginOptions.css';

function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = authenticateUser(email, password, 'admin');
    if (user) {
      navigate('/admin');
    } else {
      alert('Invalid credentials or not an admin email.');
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        EcoCup Admin Login
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

export default LoginAdmin;