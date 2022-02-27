import React from 'react'
import Fade from 'react-reveal/Fade';

export default function Project() {

    return (<>
        <h2>Projects...</h2>
        <div id='project'>
            <Fade left>
                <div className="card " id='b1photo'  >
                    <div className="card-body">
                        <h2 className="card-title">Notes App</h2>
                        <div className="card-text"><div>One can signUp and login.</div>
                            <div>One can Create Edit and Delete self notes.</div>
                            <div>Tech Used : ReactJs, ExpressJs, Mongodb, Nodejs, Bootstrap, Json Web Token for authentication.</div>
                            <a href="https://mern-stack-note-app.herokuapp.com/login" className="btn btn-secondary" target="_blank">Website</a>
                            <a href="https://github.com/Keshav18khandelwal/fullStackNotesApp" className="btn btn-secondary" target="_blank">Source</a></div>
                            
                    </div>
                </div>
                </Fade>
                <Fade right>
                <div className="card " id='b2photo' >
                    <div className="card-body">
                        <h2 className="card-title">News App</h2>
                        <div className="card-text"><div>One can watch defferent category News.</div>
                            <div>Api used in this project working only on localhost so clone source code and run in your sysem</div>
                            <div>Tech Used : ReactJs, Bootstrap, News api.</div>

                            <a href="https://github.com/Keshav18khandelwal/NewsAPP" className="btn btn-secondary" target="_blank">Source</a></div>
                    </div>
                </div>
                </Fade>
            
           
        </div>
        </>
    )
}
