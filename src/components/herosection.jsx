import React from 'react';
import { useState } from 'react';
import { Typewriter } from "react-simple-typewriter";
import BlurText from './aminations/BlurText';
import DotGrid from './aminations/DotGrid';
import github from '../assets/github1.png';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';

const herosection = () => {
  const [displayPopUp, setDisplayPopUp] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid
          dotSize={5}
          gap={17}
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
            tagName="h1"
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
          <button className='work' onClick={() => setDisplayPopUp(true)}>About Me</button>
        </div>
      </div>

      <div
        className={`pop-container ${displayPopUp ? 'show' : 'hide'}`}
        onClick={() => setDisplayPopUp(false)}
      >
        <div className="pop-up" onClick={(e) => e.stopPropagation()}>
          <div className="pop-content">
            <p>Hello! I’m Sam from Salem, Tamil Nadu, currently pursuing my Master of Computer Applications (MCA) at Periyar University, Salem. My interest in Computer Science began during my schooling at John Britto Matriculation Higher Secondary School, Salem. Scoring a centum in Computer Science in my 12th standard motivated me to pursue this field professionally.
            </p>

            <p> I completed my B.Sc. Computer Science at Jairam College of Arts and Science, Salem, where I built a strong foundation in programming and problem-solving. During my final year, I actively participated in technical symposiums and competed in web designing events. I secured second place at Periyar University, which boosted my confidence, and later achieved first place at Muthayammal College, competing against participants from nearly 40 colleges, including engineering institutions.</p>
            <p>
              Interestingly, the same university where I won a web designing competition later entrusted me with developing the official symposium website for Periyar University. The website served as the main landing page and handled online registrations, and it was successfully deployed and actively used during the symposium. This experience gave me valuable exposure to building and delivering a real-world, production-ready web application.</p>

            <p>Through an internship in MERN Stack Development and multiple hands-on projects, I discovered my passion for full-stack web development. I was also honored with the Academic Excellence Award during my undergraduate studies. Currently, as an MCA student, I am focused on continuously improving my skills and building scalable, user-centric web applications that solve real-world problems.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default herosection;