import React from 'react'
import dyc from '../assets/dyc-logo.jpg'
import evt from '../assets/evt.png'
import sms from '../assets/sms.png'
const projectList = [
    {
        id: 1,
        title: 'Decode Your Course',
        description: 'An AI powered Learning platform for programming',
        img: dyc
    },
    {
        id: 2,
        title: 'Event Management System',
        description: 'An Event Management System for managing college events',
        img: evt
    },
    {
        id: 3,
        title: 'Student Management System',
        description: 'A Student Management System for managing student data',
        img: sms
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'Another project description',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s'
    }
]

const Projects = () => {
    return (
        <>
            <h1>My Works......</h1>
            <div className="all-projects">
                {projectList.map(project => (
                    <div className="project-cards" key={project.id}>
                        <img src={project.img} alt={project.title} className='proj-img' />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button className='explore' >Explore</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects
