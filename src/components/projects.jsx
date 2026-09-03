import React, { useState, memo } from 'react';
import dyc from '../assets/pro-images/7.jpg';
import dyc1 from '../assets/pro-images/8.jpg';
import evt from '../assets/pro-images/1.jpg';
import evt1 from '../assets/pro-images/2.jpg';
import sms from '../assets/pro-images/3.jpg';
import sms1 from '../assets/pro-images/4.jpg';
import quiz from '../assets/pro-images/5.jpg';
import quiz1 from '../assets/pro-images/6.jpg';
import weather from '../assets/pro-images/9.jpg';
import weather1 from '../assets/pro-images/10.jpg';
import './Projects.css';

const projectList = [
    {
        id: 1,
        title: 'Decode Your Course',
        subtitle: 'AI-Powered E-Learning Platform',
        description: 'An interactive full-stack learning platform designed for programming students with dynamic course paths and intelligent code assistance.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        img: dyc,
        hoverImg: dyc1,
        url: 'https://decodeyourcourse.netlify.app/',
        github: 'https://github.com/888SAM-B'
    },
    {
        id: 2,
        title: 'Event Management System',
        subtitle: 'College Event Registration & Operations',
        description: 'Comprehensive event management platform handling real-time participant registrations, schedule tracking, and automated announcements for university symposiums.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS3'],
        img: evt,
        hoverImg: evt1,
        url: 'https://dyc-event-management.netlify.app/',
        github: 'https://github.com/888SAM-B'
    },
    {
        id: 3,
        title: 'Student Management System',
        subtitle: 'Academic Records & Analytics Hub',
        description: 'Secure full-stack portal for managing student attendance, marks, department directories, and administrative record lookups with role-based auth.',
        tech: ['MERN Stack', 'RESTful API', 'JWT Auth', 'MongoDB'],
        img: sms,
        hoverImg: sms1,
        url: 'https://dyc-student-management.netlify.app',
        github: 'https://github.com/888SAM-B'
    },
    {
        id: 4,
        title: 'Quiz Creator App',
        subtitle: 'Dynamic Assessment & Testing Engine',
        description: 'Versatile web application allowing educators and students to create customized timed quizzes, track real-time score leaderboards, and review answers.',
        tech: ['React', 'JavaScript', 'State Management', 'Tailwind'],
        img: quiz,
        hoverImg: quiz1,
        url: 'https://dyc-quiz.netlify.app/',
        github: 'https://github.com/888SAM-B'
    },
    {
        id: 5,
        title: 'Weather Forecast Dashboard',
        subtitle: 'Live Atmospheric Radar & Metrics',
        description: 'Responsive meteorological dashboard delivering real-time weather forecasts, humidity, wind speeds, and 5-day outlooks using live weather APIs.',
        tech: ['React', 'OpenWeather API', 'Geolocation', 'CSS Grid'],
        img: weather,
        hoverImg: weather1,
        url: 'https://cbtweatherapp.netlify.app/',
        github: 'https://github.com/888SAM-B'
    }
];

const ProjectCard = memo(({ project, index, total }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="sticky-project-card"
            style={{
                top: `calc(85px + ${index * 22}px)`,
                zIndex: index + 1
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-header-bar">
                <div className="card-counter">
                    <span className="counter-num">0{index + 1}</span>
                    <span className="counter-total">/ 0{total}</span>
                </div>
                <div className="card-status-badge">
                    <span className="pulse-dot"></span>
                    <span>Live Project</span>
                </div>
            </div>

            <div className="card-main-grid">
                <div className="card-info-side">
                    <div>
                        <span className="card-subtitle">{project.subtitle}</span>
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-description">{project.description}</p>
                    </div>

                    <div className="card-bottom-content">
                        <div className="card-tech-pills">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-pill">{t}</span>
                            ))}
                        </div>

                        <div className="card-actions">
                            <button
                                className="btn-live"
                                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                            >
                                Explore Live ↗
                            </button>
                            <button
                                className="btn-code"
                                onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                            >
                                View Code
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card-preview-side">
                    <div className="preview-window">
                        <div className="window-dots">
                            <div className="mac-dots">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <span className="window-url">{project.url.replace('https://', '')}</span>
                        </div>
                        <div className="image-container">
                            <img
                                src={isHovered ? project.hoverImg : project.img}
                                alt={project.title}
                                className="project-screenshot"
                                loading="lazy"
                            />
                            <div className="hover-hint">Hover to toggle preview</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
    return (
        <div className="section-block">
            <div className="section-header">
                <h2 className="section-title">Featured Works</h2>
                <p className="section-subtitle">Scroll down to explore the deck of full-stack projects</p>
            </div>

            <div className="sticky-stack-wrapper">
                {projectList.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        total={projectList.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
