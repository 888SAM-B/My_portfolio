import React from 'react'

const skills = () => {
  return (
    <>
        <h2 className='skill-start'>Skills </h2>
        <div className="skills">
            <div className="list">
                <div className="list-title">
                    <h2>Front-End Technologies</h2>
                </div>
                <div className="list-items">
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>HTML</li>
                    </ul>
                </div>   
            </div>
            <div className="list">
                <div className="list-title">
                    <h2>Back-End Technologies</h2>
                </div>
                <div className="list-items">
                    <ul>
                        <li>Node.js + Express.js </li>
                        <li>Python</li>
                        <li>MongoDB</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
            <div className="list">
                <div className="list-title">
                    <h2>Tools & Platforms</h2>
                </div>
                <div className="list-items">
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Pycharm</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}


export default skills
