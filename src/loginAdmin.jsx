import React from 'react';
import './loginOptions.css';

function LoginAdmin() {
  return (
    <div className='container'>
      <div className='header'>
        EcoCup Admin Login
        <div className='title'>Enter your ID and password</div>

        {/* Email Input */}
        <label htmlFor="email">Enter your ID</label>
        <input
          type='email'
          id="email"
          placeholder='Enter your ID'
        />

        {/* Password Input */}
        <label htmlFor="password">Enter your password</label>
        <input
          type='password'
          id="password"
          placeholder='Enter your password'
        />

        {/* Log in Button */}
        <button>Log in</button>

        {/* Back to Login Options */}
        <div className='backToLogin'>Back to login options</div>
      </div>
    </div>
  );
}

export default LoginAdmin;