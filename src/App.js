// rgb(221,194,165)

// rgb(32,30,33)

// rgb(224,170,110)

import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Project from './component/Project';
import SkillItem from './component/SkillItem.js';
import Contact from './component/Contact.js';
import Education from './component/Education.js';
import About from './component/About.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
function App() {
 
  return (
    <div className="App">
      <Router>
      <Navbar />
     
      <Home />
      
      <Project />
      
      <SkillItem />
     
      <Education />
      
      <Contact />
      <About/>
      <Routes>
        <Route path="#home" element={<Home/>}/>
        <Route path="#project" element={<Project />}/>
        <Route path="#skill" element={<SkillItem />}/>
        <Route path="#education" element={<Education />}/>
        <Route path="#contact" element={<Contact />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
