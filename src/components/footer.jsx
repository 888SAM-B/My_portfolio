import { h2 } from 'motion/react-client'
import React from 'react'
import resume from '../assets/sam-resume.pdf'

const Footer = () => {
    return (
        <>
            <h2>Quick Links</h2>
            <div className="links">
                <div className="one1">


                    <a href="#projects">My Works</a> <br />  <br />
                    <a href="#skills">Skills</a> <br />  <br />
                    <a href="#certifications">Certifications</a> <br />  <br />
                </div>
                <div className="two2">
                    <a href="#achievements">Achievements</a> <br />  <br />
                    <a href={resume} target="_blank">Resume</a> <br />  <br />
                    <a href="#contact">Contact</a> <br />  <br />
                </div>
                <div className="three3">
                    <a href="https://www.github.com/888SAM-B" target='_blank' >Github</a> <br />  <br />
                    <a href="mailto:bsam53888@gmail.com">Mail</a> <br />  <br />
                    <a href="https://www.linkedin.com/in/samb19/" target='_blank'>LinkedIn</a> <br />  <br />
                </div>
            </div>
            
            
            
        </>
    )
}

export default Footer