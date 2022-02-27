import React from 'react'
import c from './images/c.png';
import cpp from './images/c++.jpg'
import html from './images/html.png';
import css from './images/css.png';
import git from './images/git.png';
import javascript from './images/javascript.png';
import mongodb from './images/mongodb.png';
import python from './images/python.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import bootstrap from './images/bootstrap.png';
import Skill from './Skills.js'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

export default function SkillItem() {
  return (
    <div>
   <Fade top><h2 className="sk">Skills</h2></Fade>   
     <Fade bottom>
      <div className='container'>
        <div className='row'>
        <Pulse duration={8000} delay={0} forever={true}>
     
          <div className='col-6 col-md-3'>
      <Skill src={`${c}`} name="C Language"/>
      </div>
      </Pulse>
      <Pulse duration={8000} delay={2000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${cpp}`} name="C++ Language"/> 
        </div>
        </Pulse>
      <Pulse duration={8000} delay={4000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${html}`} name="HTML"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={6000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${css}`} name="CSS"/>
       
        </div>
        </Pulse>
      <Pulse duration={8000} delay={0} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${javascript}`} name="JavaScript"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={2000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${react}`} name="React"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={4000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${nodejs}`} name="NodeJs"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={6000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${mongodb}`} name="Mongodb"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={0} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${git}`} name="git"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={2000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${bootstrap}`} name="Bootstrap"/>
        </div>
        </Pulse>
      <Pulse duration={8000} delay={4000} forever={true}>
      <div className='col-6 col-md-3'>
        <Skill src={`${python}`} name="Python"/>
        </div>
        </Pulse>
        </div>
      </div>
      </Fade>
    </div>
  )
}
