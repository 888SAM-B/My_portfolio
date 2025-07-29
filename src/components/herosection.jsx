import React from 'react'
import { Typewriter } from "react-simple-typewriter";
const herosection = () => {
  return (
    <>
        <h1>Hello 👋 , I'm B Sam</h1>
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
      <button onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })}>See My Work</button>
    </>
  )
}

export default herosection