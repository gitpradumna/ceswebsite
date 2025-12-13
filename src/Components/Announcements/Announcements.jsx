import React from 'react';
import './Announcements.css';

const Announcements = ({
  heading = 'Announcements',
  subheading = 'Stay updated with latest news and events',
  items
}) => {
  // Fallback sample data; replace with backend feed
  const announcements = items && items.length ? items : [
    {
      id: 1,
      title: 'Workshop on Structural Design',
      date: 'Coming Soon',
      description: 'Join us for an intensive workshop on modern structural design principles and software.',
      type: 'workshop',
    },
    {
      id: 2,
      title: 'Annual General Meeting',
      date: 'Coming Soon',
      description: 'All members are requested to attend the AGM for important society updates.',
      type: 'meeting',
    },
    {
      id: 3,
      title: 'Technical Seminar Registration Open',
      date: 'Coming Soon',
      description: 'Register now for our upcoming technical seminar featuring industry experts.',
      type: 'event',
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
        <h2>{heading}</h2>
        <p>{subheading}</p>
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
