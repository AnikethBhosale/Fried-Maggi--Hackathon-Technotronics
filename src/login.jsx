import React from 'react'
import  './login.css'

function Loginpg() {
    return (
        <div className='container'>
          <div className='header'>EcoCup Login
            <div className='title'>Choose your login type</div>
            <div className='buttons'>
              <div className='containerOptions'>Student</div>
              <div className='containerOptions'>Vendor</div>
              <div className='containerOptions'>Admin</div>
            </div>
          </div>
        </div>
    )
}

export default Loginpg;