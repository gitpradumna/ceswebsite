import React from 'react';
import './Team.css';

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

  return (
    <div className="team-page">
      <div className="team-hero">
        <h1>Our Team</h1>
        <p>Meet the dedicated individuals behind Civil Engineering Society</p>
      </div>

      <div className="team-container">
        {Object.entries(teamData).map(([category, members]) => (
          <div key={category} className="team-category">
            <h2 className="category-title">{category}</h2>
            <div className="team-grid">
              {members.map(member => (
                <div key={member.id} className="team-card">
                  <div className="team-image-wrapper">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
