import React from 'react';
import ElectricBorder from './aminations/ElectricBorder';

const skills = () => {
    const skillsData = [
        {
            title: "Front-End Technologies",
            items: ["React", "JavaScript", "CSS", "HTML"]
        },
        {
            title: "Back-End Technologies",
            items: ["Node.js", "Express.js", "Python", "MongoDB", "SQL"]
        },
        {
            title: "Tools & Platforms",
            items: ["Git", "GitHub", "VS Code", "Pycharm"]
        }
    ];

    return (
        <>
            <h2 className='skill-start'>Skills </h2>
            <div className="skills">
                {skillsData.map((skill, index) => (
                    <ElectricBorder
                        key={index}
                        color="#DFD0B8"
                        speed={1}
                        chaos={0.5}
                        thickness={2}
                        style={{ borderRadius: 16 }}
                    >
                        <div className="list">
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
                    </ElectricBorder>
                ))}
            </div>
        </>
    );
};

export default skills;