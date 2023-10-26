import React from 'react'
import sea from './sea.mp4'
const Signup = () => {
  return (
    <div className='container-fluid mt-5 mb-5 vid' >
        <div className="signup-content d-flex mx-auto flex-column align-items-center w-100" style={{zIndex: 2}}>
          <h4 className='text-light fw-bold mt-5'>Sign Up for 35% Discount</h4>
          <h5 className='text-light'>Want to get an instant discount for your next</h5>
          <h5 className='text-light'>tour to any of your favourite destinations.</h5>
          <input type="text" className='form-control input-field mt-4' placeholder='Enter your email address'/>
          <button type="button" class="btn btn-danger mt-3">Get in touch</button>
        </div>
        <video className='Video' src={sea} alt="" autoPlay loop muted/>
    </div>
  )
}

export default Signup