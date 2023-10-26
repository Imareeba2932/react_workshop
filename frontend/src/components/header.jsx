import React from 'react'
import image from './tour.png'
import { Fade } from 'react-reveal'
const Header = () => {
    return (
        <Fade bottom>
            <section >
                <div className='d-flex justify-content-center bg mt-5'>
                    <img src={image} alt="tour" className="img img-fluid" />
                </div>
                {/* <header className='header'>
                    <div className='header-content'>
                        <div className="left-content">
                            <h3>A team of professional travel experts</h3>
                            <h4 className=" display-2 fw-bold ">Trust <span className="text-danger fw-bold " >Our Experience</span></h4>
                            <h3>India once is not enough.</h3>
                            
                        </div>
                    </div>
                </header> */}
            </section>
        </Fade>
    )
}

export default Header