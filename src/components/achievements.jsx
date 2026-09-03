import React from 'react';
import Stack from './aminations/Stack';
import fusion from '../assets/achivement-images/31.jpg';
import pixel from '../assets/achivement-images/32.jpg';
import python from '../assets/achivement-images/333.jpg';

const Achievements = () => {
  const images = [
    pixel,
    fusion,
    python
  ];

  const achievementDetails = [
    {
      title: "PIXEL SHOW 2K24",
      place: "1st Place 🏆",
      event: "National Level Technical Symposium (Competed against 40+ Engineering & Arts colleges)",
    },
    {
      title: "FUSION BYTES 2K24",
      place: "2nd Place 🥈",
      event: "National Level Technical Symposium - Periyar University Web Designing Event",
    },
    {
      title: "Python Programming & Quiz",
      place: "1st Place 🥇",
      event: "State-level coding competition hosted by Learnz Development Hub",
    }
  ];

  return (
    <div className="section-block">
      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Awards and recognitions from technical symposiums & competitions</p>
      </div>

      <div className="achievements-grid-wrapper">
        <div className="achievement-stack-box">
          <p className="swipe-hint">Drag or click cards to flip through certificates</p>
          <div className="achievement-container">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Achievement Award ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ))}
            />
          </div>
        </div>

        <div className="achievements-list">
          {achievementDetails.map((item, idx) => (
            <div className="achievement-item-card" key={idx}>
              <div className="achievement-badge">{item.place}</div>
              <div className="achievement-info">
                <h3>{item.title}</h3>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;