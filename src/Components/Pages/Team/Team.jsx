import React, { useState, useRef, useLayoutEffect } from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Team.css';
import ThirdYear from '../../Team/ThirdYear';
import FourthYear from '../../Team/FourthYear';

const teamSections = [
  {
    key: 'postBearer',
    label: 'Post Bearers',
    members: [
      { name: 'Tanya Kumari', post: 'President', image: 'src/assets/tanya.jpg' },
      { name: 'Anshika', post: 'General Secretary', image: 'src/assets/anshika.jpg' },
      { name: 'Swapnil Ghosh', post: 'Assistant General Secretary', image: 'src/assets/swapnil.jpg' }
    ]
  },
  {
    key: 'fourthYear',
    label: '4th Year',
    members: [
      { name: 'Sample 4th Year', post: 'Member', image: 'https://via.placeholder.com/120' }
    ]
  },
  {
    key: 'thirdYear',
    label: '3rd Year',
    members: [] // Will render via ThirdYear component
  }
];

const Team = () => {
  // Sample team data organized by categories - replace with actual data from backend
  const teamData = {
    'Core Team': [
      {
        id: 1,
        name: 'Vaibhav Kumar',
        position: 'President',
        image: '/path-to-image.jpg'
      },
      {
        id: 2,
        name: 'Harika Boddu',
        position: 'Vice President',
        image: '/path-to-image.jpg'
      },
      {
        id: 3,
        name: 'Pawan Pratap',
        position: 'General Secretary',
        image: '/path-to-image.jpg'
      }
    ],
    'Technical Team': [
      {
        id: 4,
        name: 'Vamsi Gara',
        position: 'Tech Head',
        image: '/path-to-image.jpg'
      },
      {
        id: 5,
        name: 'John Doe',
        position: 'Web Developer',
        image: '/path-to-image.jpg'
      },
      {
        id: 6,
        name: 'Jane Smith',
        position: 'Web Developer',
        image: '/path-to-image.jpg'
      }
    ],
    'Events Team': [
      {
        id: 7,
        name: 'Mike Johnson',
        position: 'Events Head',
        image: '/path-to-image.jpg'
      },
      {
        id: 8,
        name: 'Sarah Williams',
        position: 'Events Coordinator',
        image: '/path-to-image.jpg'
      },
      {
        id: 9,
        name: 'Emily Davis',
        position: 'Events Coordinator',
        image: '/path-to-image.jpg'
      }
    ],
    'Media & Marketing': [
      {
        id: 10,
        name: 'David Brown',
        position: 'Marketing Head',
        image: '/path-to-image.jpg'
      },
      {
        id: 11,
        name: 'Alex Wilson',
        position: 'Content Lead',
        image: '/path-to-image.jpg'
      },
      {
        id: 12,
        name: 'Sam Taylor',
        position: 'Design Head',
        image: '/path-to-image.jpg'
      }
    ]
  };

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
    if (section.key === 'thirdYear') {
      return <ThirdYear />;
    }
    if (section.key === 'fourthYear') {
      return <FourthYear />;
    }
    return (
      <div className="team-category" style={{ minWidth: '100%', boxSizing: 'border-box' }}>
        <div className="team-grid">
          {section.members.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-post">{member.post}</p>
                <div className="team-card-social" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="Instagram">
                    <BsInstagram className="social-icon-prop" size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="LinkedIn">
                    <BsLinkedin className="social-icon-prop" size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
