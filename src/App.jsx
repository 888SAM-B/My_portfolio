import { useState } from 'react'
import Nav from './components/nav';
import Herosection from './components/herosection';
import Projects from './components/projects';
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
    </>
  )
}

export default App
