import React, { useState, useRef, useLayoutEffect } from 'react';
import './Team.css';
import PostBearer from '../../Team/PostBearer';
import ThirdYear from '../../Team/ThirdYear';
import FourthYear from '../../Team/FourthYear';

const teamSections = [
  {
    key: 'postBearer',
    label: 'Post Bearers'
  },
  {
    key: 'fourthYear',
    label: '4th Year'
  },
  {
    key: 'thirdYear',
    label: '3rd Year'
  }
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const btnsWrapperRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 120, left: 12 });

  useLayoutEffect(() => {
    if (btnsWrapperRef.current) {
      const btns = btnsWrapperRef.current.querySelectorAll('.team-tab-btn');
      if (btns.length > 0 && btns[activeIndex]) {
        const width = btns[activeIndex].offsetWidth;
        const left = btns[activeIndex].offsetLeft;
        setSliderStyle({ width, left });
      }
    }
  }, [activeIndex]);

  const renderSection = (section) => {
    if (section.key === 'postBearer') {
      return <PostBearer />;
    }
    if (section.key === 'thirdYear') {
      return <ThirdYear />;
    }
    if (section.key === 'fourthYear') {
      return <FourthYear />;
    }
    return null;
  };

  return (
    <div className="team-page">
      <div className="team-tabs">
        <div className="team-tab-btns-wrapper" ref={btnsWrapperRef}>
          {teamSections.map((section, idx) => (
            <button
              key={section.key}
              className={`team-tab-btn${activeIndex === idx ? ' active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              {section.label}
            </button>
          ))}
          <div
            className="team-tab-slider-pill"
            ref={sliderRef}
            style={{
              width: sliderStyle.width,
              left: sliderStyle.left,
              transition: 'left 0.3s cubic-bezier(.77,0,.18,1), width 0.3s cubic-bezier(.77,0,.18,1)',
            }}
          />
        </div>
      </div>

      {renderSection(teamSections[activeIndex])}
    </div>
  );
};

export default Team;
