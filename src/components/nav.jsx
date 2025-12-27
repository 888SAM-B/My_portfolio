import React, { useState, useEffect } from "react";
import "./nav.css";
import resume from "../assets/sam-resume.pdf";
const Nav = () => {
    const [open, setOpen] = useState(false);

    // ensure menu closes when resizing to desktop
    useEffect(() => {
        const onResize = () => {
            // if (window.innerWidth > 768) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="left">
                    <h1>Portfolio</h1>
                </div>

                <button
                    className={`hamburger ${open ? "is-active" : ""}`}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <ul className={`right ${open ? "open" : ""}`}>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href={resume} target="_blank">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;