import React from 'react'

const achievements = () => {
  return (
    <>
      <h2>Achievements Section</h2>
      <div className="achievements">
        <div className="achievement">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s" alt="Project 1" />     
          <h3 className='achievementTitle'>FUSION BYTES 2K24</h3>
          <p className='achievementDescription'>Second Place in National Level Technical Symposium</p>
        </div>
        <div className="achievement">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s" alt="Project 2" />
          <h3 className='achievementTitle'>PIXEL SHOW 2K24</h3>
          <p className='achievementDescription'>First Place in National Level Technical Symposium</p>
        </div>
        <div className="achievement">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuLZe9UHs6cC_sIBZ8HIqkTg4ADomTdWBcQ&s" alt="Project 2" />
          <h3 className='achievementTitle'>Python Programming an Quiz</h3>
          <p className='achievementDescription'>First Place in Python programming and quiz competition by Learnz Development Hub </p>
        </div>
      </div>
    </>
  )
}

export default achievements