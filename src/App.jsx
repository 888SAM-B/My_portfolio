import Nav from './components/nav';
import Herosection from './components/herosection';
import Projects from './components/projects';
import Skills from './components/skills';
import Achievements from './components/achievements';
import Certifications from './components/certifications';
import Contact from './components/contact';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="mainContent">
        <Herosection />
      </div>
      <section id="projects" className="section-container">
        <Projects />
      </section>
      <section id="skills" className="section-container">
        <Skills />
      </section>
      <section id="certifications" className="section-container">
        <Certifications />
      </section>
      <section id="achievements" className="section-container">
        <Achievements />
      </section>
      <section id="contact" className="section-container">
        <Contact />
      </section>
      <div className="foot-wrapper">
        <Footer />
      </div>
      <footer>
        <p className="des">Designed & Developed by Sam B © 2025</p>
      </footer>
    </div>
  );
}

export default App;
