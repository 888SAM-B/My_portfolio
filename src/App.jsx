import { useState } from 'react'
import Nav from './components/nav';
import Herosection from './components/herosection';
import Projects from './components/projects';
import Skills from './components/skills';
import Achievements from './components/achievements';
import Certifications from './components/certifications';
import Contact from './components/contact';
import './App.css'

function App() {
  return (
    <>
     <nav>
      <Nav/>
     </nav>
     <div id="mainContent">
      <Herosection /> 
     </div>
     <div id="projects">
      <Projects />
     </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div className="contact">
        <Contact/>
      </div>
    </>
  )
}

export default App
