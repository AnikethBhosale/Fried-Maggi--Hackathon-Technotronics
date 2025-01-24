import React from 'react';
import './studentPage.css';

function StudentPage (){
    return (
        <div>
          <div className='Home'>
            <div className='Facts'>
              <div className='Facts_text'>some facts</div>
              <div className='randomFact'>some varia</div>
            </div>



            <div className='points_impact'>
              <div className='points'>500</div>

              <div className='impact'>
                <div className='reusable_cup'>40</div>
                <div className='use_n_throw'>22</div>
                <div className='math'>(40%22)*100</div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default StudentPage;