import React from 'react'
import Fade from 'react-reveal/Fade';
export default function Education() {
  return (
    <div className='education' id='education'>
      <Fade top>
        <h2 className='sk'>Education</h2>
        </Fade>
        <Fade left>
        <div className='ediv'>
            <h3>B-tech in Computer Science </h3>
            <h5>College of technology and Engineering Udaipur, Rajasthan </h5>
            <span className='mx-3'>2019-2023</span>
            <span className='mx-3'>OGPA : 7.61</span>
            
        </div>
        </Fade>
        <Fade right>
        <div className='ediv' >
            <h3>Class 12th in RBSE</h3>
            <h5>Anamika Senior Secondary Public School Kaman, Bharatpur, Rajasthan</h5>
            <span className='mx-3'>2017-2018</span>
            <span className='mx-3'>Percent : 90.80%</span>
        </div>
        </Fade>
        <Fade left>
        <div className='ediv'>
            <h3>Class 10th in RBSE</h3>
            <h5>Adarsh Jeevan Shikshan Sansthan Kaman, Bharatpur, Rajasthan</h5>
            <span className='mx-3'>2015-2016</span>
            <span className='mx-3'>Percent : 89.67%</span>
        </div>
        </Fade>
    </div>
  )
}
