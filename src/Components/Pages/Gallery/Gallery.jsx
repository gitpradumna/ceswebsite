import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample data - replace with actual data from backend
  const galleryItems = [
    { id: 1, type: 'image', src: '/path-to-image.jpg', title: 'Event Photo 1', category: 'events' },
    { id: 2, type: 'image', src: '/path-to-image.jpg', title: 'Event Photo 2', category: 'events' },
    { id: 3, type: 'video', src: '/path-to-video.mp4', thumbnail: '/path-to-thumb.jpg', title: 'Workshop Video 1', category: 'workshops' },
    { id: 4, type: 'image', src: '/path-to-image.jpg', title: 'Campus Photo 1', category: 'campus' },
    { id: 5, type: 'video', src: '/path-to-video.mp4', thumbnail: '/path-to-thumb.jpg', title: 'Seminar Video 1', category: 'seminars' },
    { id: 6, type: 'image', src: '/path-to-image.jpg', title: 'Event Photo 3', category: 'events' },
  ];

  const categories = ['all', 'events', 'workshops', 'seminars', 'campus'];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>Gallery</h1>
        <p>Capturing moments, building memories</p>
      </div>

      <div className="container">
        <div className="gallery-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} />
              ) : (
                <div className="video-container">
                  <video src={item.src} poster={item.thumbnail} controls />
                </div>
              )}
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
