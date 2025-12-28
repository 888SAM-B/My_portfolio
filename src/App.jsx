import { useState } from 'react'
import Nav from './components/nav';
import Herosection from './components/herosection';
import Projects from './components/projects';
import Skills from './components/skills';
import Achievements from './components/achievements';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollStack, { ScrollStackItem } from './components/aminations/ScrollStack';

import './App.css'

function App() {
  return (
    <div className="App">
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
      <div className='foot'>
        <Footer/>
      </div>
      <footer>
        <h3 className='des' >Designed & Developed by Sam B © 2025</h3>
      </footer>
    </div>
  )
}

export default App
