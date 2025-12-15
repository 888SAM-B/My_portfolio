import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import BlurText from './aminations/BlurText';
import DotGrid from './aminations/DotGrid';
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
        <button className='work' onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })}>See My Works</button>
      </div>
      </div>
    </>
  )
}

export default herosection