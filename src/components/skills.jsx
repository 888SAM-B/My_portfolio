import React from 'react';

const Skills = () => {
    const skillsData = [
        {
            title: "Front-End Tech",
            icon: "💻",
            items: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI"]
        },
        {
            title: "Back-End Tech",
            icon: "  ",
            items: ["Node.js", "Express.js", "Python", "MongoDB", "SQL / MySQL"]
        },
        {
            title: "Tools & Platforms",
            icon: " ",
            items: ["GitHub", "VS Code", "Postman", "PyCharm", "Netlify / Vercel"]
        }
    ];

    return (
        <div className="section-block">
            <div className="section-header">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">Core technical stack and tools I use to build scalable products</p>
            </div>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-card-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <h3>{skill.title}</h3>
                        </div>
                        <div className="skill-badges">
                            {skill.items.map((item, idx) => (
                                <span className="skill-badge" key={idx}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
