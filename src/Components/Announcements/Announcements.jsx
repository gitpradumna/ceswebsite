import React from 'react';
import './Announcements.css';

const Announcements = () => {
  // Sample announcements - replace with actual data from backend
  const announcements = [
    {
      id: 1,
      title: 'Workshop on Structural Design',
      date: 'December 15, 2025',
      description: 'Join us for an intensive workshop on modern structural design principles and software.',
      type: 'workshop',
      urgent: true
    },
    {
      id: 2,
      title: 'Annual General Meeting',
      date: 'December 20, 2025',
      description: 'All members are requested to attend the AGM for important society updates.',
      type: 'meeting',
      urgent: false
    },
    {
      id: 3,
      title: 'Technical Seminar Registration Open',
      date: 'January 5, 2026',
      description: 'Register now for our upcoming technical seminar featuring industry experts.',
      type: 'event',
      urgent: false
    },
  ];

  const getTypeClass = (type) => {
    switch(type) {
      case 'workshop': return 'type-workshop';
      case 'meeting': return 'type-meeting';
      case 'event': return 'type-event';
      default: return '';
    }
  };

  return (
    <div className="announcements-section">
      <div className="announcements-header">
        <h2>Announcements</h2>
        <p>Stay updated with latest news and events</p>
      </div>

      <div className="announcements-list">
        {announcements.map(announcement => (
          <div key={announcement.id} className={`announcement-card ${announcement.urgent ? 'urgent' : ''}`}>
            {announcement.urgent && <span className="urgent-badge">Urgent</span>}
            <div className="announcement-header">
              <span className={`announcement-type ${getTypeClass(announcement.type)}`}>
                {announcement.type}
              </span>
              <span className="announcement-date">{announcement.date}</span>
            </div>
            <h3>{announcement.title}</h3>
            <p>{announcement.description}</p>
            <button className="learn-more-btn">Learn More →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
