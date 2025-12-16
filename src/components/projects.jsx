import React from 'react'
import { useState } from 'react'
import dyc from '../assets/pro-images/7.jpg'
import dyc1 from '../assets/pro-images/8.jpg'
import evt from '../assets/pro-images/1.jpg'
import evt1 from '../assets/pro-images/2.jpg'
import sms from '../assets/pro-images/3.jpg'
import sms1 from '../assets/pro-images/4.jpg'
import quiz from '../assets/pro-images/5.jpg'
import quiz1 from '../assets/pro-images/6.jpg'
import weather from '../assets/pro-images/9.jpg'
import weather1 from '../assets/pro-images/10.jpg'
import './Projects.css'; // Import your CSS file

const projectList = [
    {
        id: 1,
        title: 'Decode Your Course',
        description: 'An AI powered Learning platform for programming',
        img: dyc,
        hoverImg: dyc1,
        url:'https://decodeyourcourse.netlify.app/'
    },
    {
        id: 2,
        title: 'Event Management System',
        description: 'An Event Management System for managing college events',
        img: evt,
        hoverImg: evt1,
        url:'https://dyc-event-management.netlify.app/'
    },
    {
        id: 3,
        title: 'Student Management System',
        description: 'A Student Management System for managing student data',
        img: sms,
        hoverImg: sms1,
        url:'https://student-managemnt-systems.netlify.app/'
    },
    {
        id: 4,
        title: 'Quiz Creator',
        description: 'A Quiz Creator app for creating and taking quizzes',
        img: quiz,
        hoverImg: quiz1,
        url:'https://dyc-quiz.netlify.app/'
    },
    {
        id: 5,
        title: 'Weather App',
        description: 'A Weather Application to check the  current weather conditions',
        img: weather,
        hoverImg: weather1,
        url:'https://cbtweatherapp.netlify.app/'
    }

]

const Projects = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <>
            <h1 className='my-works'>My Works</h1>
            <div className="all-projects">
                {projectList.map(project => (
                    <div 
                        className="project-cards" 
                        key={project.id}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img 
                            src={hoveredId === project.id ? project.hoverImg : project.img} 
                            alt={project.title} 
                            className='proj-img animated-img' // Add the animated class
                        />
                        <p>{project.description}</p>
                        <button className='explore' onClick={()=>open(project.url)} >Explore</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects
