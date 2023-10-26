import React from 'react'
import { Fade } from 'react-reveal'
import image from './gif1.gif'

const About = () => {
  return (
    <Fade bottom>
      <div className='container mb-5 d-flex mx-auto about'>
        <div className="card w-100">
          <div className="row">
            <div className="col-md-5">
              <img className="w-100" src={image} />
            </div>
            <div className="col-md-7 mt-3">
                  <h4 className='text-center'>ABOUT US</h4>
                  <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, id in doloremque, quod est itaque magnam dolorum, perferendis nam reiciendis doloribus assumenda enim quae quos pariatur numquam? Earum qui ea inventore vero natus id, nulla odio perspiciatis atque quos, mollitia veniam officiis nesciunt, fuga eum quod! Praesentium corrupti deleniti dolorem.</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default About