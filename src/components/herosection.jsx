import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import BlurText from './aminations/BlurText';
import DotGrid from './aminations/DotGrid';
import github from '../assets/github1.png'
import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
const herosection = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (

    <>


      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid
          dotSize={5}
          gap={17
          }
          baseColor="#393E46"
          activeColor="#DFD0B8"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />

        <div className="hero">


          <BlurText
            text="Hello 👋 , I'm Sam B"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="name"
          />

          <h2>
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Tech Enthusiast",
                "Computer Science Graduate",
                "Lifelong Learner",
                "University Student"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>
          <div className="icon-container">
            <a href="https://github.com/888SAM-B" target='_blank'><img className='icons' src={github} alt="" /></a>
            <a href="mailto:bsam53888@gmail.com"><img className='icons' src={mail} alt="" /></a>
            <a href="https://www.linkedin.com/in/samb19/" target='_blank'><img className='icons' src={linkedin} alt="" /></a>
          </div>
          <button className='work' onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })}>See My Works</button>
        </div>
      </div>
    </>
  )
}

export default herosection