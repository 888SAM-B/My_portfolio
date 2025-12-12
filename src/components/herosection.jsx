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
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />

      <div className="hero">


        <BlurText
          text="Hello 👋 , I'm B Sam"
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
              "Lifelong Learner"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>
        <button className='work' onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })}>See My Work</button>
      </div>
      </div>
    </>
  )
}

export default herosection