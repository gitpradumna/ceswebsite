import React from 'react';
import Announcements from '../../Announcements/Announcements';

const AnnouncementsPage = () => {
  const liveNow = [
    {
      id: 'l1',
      title: 'Auditions',
      date: 'Happening Soon',
      description: 'Auditions coming soon to the students. Join the venue or tune in to the stream.',
      type: 'event'
    }
  ];

  const upcoming = [
    {
      id: 'u1',
      title: 'Bridge Design Hackathon',
      date: 'Coming Soon',
      description: '48-hour design sprint on modern bridge systems with jury feedback.',
      type: 'event'
    },
    {
      id: 'u2',
      title: 'Software Workshop Series',
      date: 'Coming Soon',
      description: 'Hands-on sessions on ETABS, STAAD, and Revit for civil workflows.',
      type: 'workshop'
    }
  ];

  const past = [
    
    {
      id: 'p1',
      title: 'Freshers Party',
      date: 'Completed',
      description: 'Welcome celebration for the new batch with games, music, and introductions.',
      type: 'event'
    },
    {
      id: 'p2',
      title: 'Expert Talks ',
      date: 'Completed',
      description: 'Inspiring talks by Asmit Roy Burman on Structural Analysis using remote sensing.',
      type: 'talk'
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '3rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Announcements
          heading="Live Now"
          subheading="Happening at this moment"
          items={liveNow}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <Announcements
          heading="Upcoming"
          subheading="What’s scheduled next"
          items={upcoming}
        />
      </div>

      <div>
        <Announcements
          heading="Past Highlights"
          subheading="Recent events and workshops"
          items={past}
        />
      </div>
    </div>
  );
};

export default AnnouncementsPage;
