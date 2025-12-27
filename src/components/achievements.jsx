import React from 'react'

import Stack from './aminations/Stack';
import fusion from '../assets/achivement-images/31.jpg'
import pixel from '../assets/achivement-images/32.jpg'
import python from '../assets/achivement-images/333.jpg'


const achievements = () => {
  const images = [
    fusion,
    pixel,
    python,
    // "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
  ];
  return (
    <>
      <h2>Achievements Section</h2>
      {/* <div className="achievements">
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
      </div> */}

      <div className='achievement-container'>
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={true}
          cards={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`card-${i + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ))}
        />
      </div>

    </>
  )
}

export default achievements