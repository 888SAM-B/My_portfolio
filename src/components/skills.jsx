import React from 'react';
import ElectricBorder from './aminations/ElectricBorder';

const skills = () => {

    const skillsData = [
        {
            title: "Front-End Tech",
            items: ["React", "JavaScript", "CSS", "HTML"]
        },
        {
            title: "Back-End Tech",
            items: ["Node.js + Express.js", "Python", "MongoDB", "SQL"]
        },
        {
            title: "Tools & Platforms",
            items: ["GitHub",  "VS Code", "Pycharm","MS Office"]
        }
    ];


    return (
        <>
            <h2 className='skill-start'>Skills </h2>
            <div className="skills">
                {skillsData.map((skill, index) => (
                        <div className="list-skill">
                            <div className="list-title">
                                <h2>{skill.title}</h2>
                            </div>
                            <div className="list-items">
                                <ul>
                                    {skill.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    
                ))}
            </div>
        </>
    );
};


export default skills;
