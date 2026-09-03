import React from 'react';
import resume from '../assets/sam-resume.pdf';

const Footer = () => {
    return (
        <div className="footer-content">
            <div className="footer-links-grid">
                <div className="link-column">
                    <h4>Navigation</h4>
                    <a href="#mainContent">Home</a>
                    <a href="#projects">My Works</a>
                    <a href="#skills">Skills</a>
                </div>
                <div className="link-column">
                    <h4>Explore</h4>
                    <a href="#certifications">Certifications</a>
                    <a href="#achievements">Achievements</a>
                    <a href={resume} target="_blank" rel="noreferrer">Resume (PDF)</a>
                </div>
                <div className="link-column">
                    <h4>Connect</h4>
                    <a href="https://www.github.com/888SAM-B" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="mailto:bsam53888@gmail.com">Email</a>
                    <a href="https://www.linkedin.com/in/samb19/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;