import React from 'react';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse'
export default function About() {

  
  return (<div id='about' >
    
    <div style={{ "marginTop": "8vh", "marginRight": "0px", "marginLeft": "0px", "paddingBottom": "10vh", "backgroundColor": "black", "color": "white", "display": "flex", "justifyContent": "center" }}>
      <div>
        <div style={{ "fontSize": "2em", "color": "white", "paddingBottom": "2vh", "display": "flex", "justifyContent": "center" }} className="d-flex mx-3 my-3">
       <Fade bottom>
        <div className='mx-2'>
            <a href="tel:9928168749" target="_blank">
              <span style={{ "color": "white" }}>

              <i className="fa fa-solid fa-mobile"></i>
              </span>
            </a>
          </div>
          
          <div className='mx-2'>
            <a href="https://www.instagram.com/khandelwal.2001/" target="_blank">
              <span style={{ "color": "white" }}>

                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </div>
          <div className='mx-2'>
            <a href="https://github.com/Keshav18khandelwal/" target="_blank">
              <span style={{ "color": "white" }}>
                <i className="fab fa-brands fa-github"></i>
              </span>
            </a>
          </div>
          
         
          <div className='mx-2'>
            <a href="https://www.facebook.com/keshav.khandelwal.54" target="_blank">
              <span style={{ "color": "white" }}>

                <i className="fab fa-facebook"></i>
              </span>
            </a>
          </div>
          <div className='mx-2'>
            <a href="https://www.linkedin.com/in/keshav-khandelwal-91542419b" target="_blank">
              <span style={{ "color": "white" }}>

                <i className="fab fa-linkedin"></i>
              </span>
            </a>
          </div>
          <div className='mx-2'>
            <a href="mailto:khandelwal18keshav@gmail.com" target="_blank">
              <span style={{ "color": "white" }}>

              <i className="fa fa-solid fa-envelope"></i>
              </span>
            </a>
          </div>
          </Fade>
        </div>
        <div >
          Made with <Pulse duration={4000}><span style={{"color":"Red","fontSize":"1.4rem"}}>&#10084;</span></Pulse>  by Keshav Khandelwal
        </div>
      </div>
    </div>
  </div>)
}
