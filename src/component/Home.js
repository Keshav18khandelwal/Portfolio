import React from 'react'
import keshavphoto from './images/keshavphoto1.jpg';
import Flash from 'react-reveal/Flash';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
export default function Home() {
  return (
    <div id='home'>
        <LightSpeed><img src={`${keshavphoto}`} alt="Not Available" id='kphoto'/></LightSpeed>
        {/* <Flash forever={true} duration={5000}> */}
        <h3 id='Hh'>Keshav Khandelwal</h3>
        {/* </Flash> */}
      <Fade left>  
        <div className='aboutk'>
        <p>Hi! I am Keshav Khandelwal a Web Developer and an undergraduate student of computer science and Engineering  in the College of Technnology and Engineering.
           I am Interested in problem-solving .Currently i am searching an Internship in Web Development field.
        </p>
        </div>
        </Fade>
        
    </div>
  )
}
