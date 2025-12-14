import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import dipteshImg from '../../assets/diptesh.jpg';

const FacultyAdvisor = () => {
  const advisors = [
    { 
      name: 'Dr. Diptesh Das', 
      post: 'Faculty Advisor', 
      image: dipteshImg,
      email: 'ddas.ce@nitdgp.ac.in'
    },
  ];
  
  return (
    <section className="faculty-advisor-section">
      <div className="faculty-grid">
        {advisors.map((advisor, idx) => (
          <div key={idx} className="faculty-card">
            <div className="faculty-image-wrapper">
              <img src={advisor.image} alt={advisor.name} />
            </div>
            <div className="faculty-info">
              <h3>{advisor.name}</h3>
              <p className="faculty-post">{advisor.post}</p>
              <div className="faculty-card-social">
                <a 
                  href={`mailto:${advisor.email}`}
                  className="socialHover" 
                  aria-label="Email"
                  rel="noopener noreferrer"
                >
                  <MdOutlineEmail className="social-icon-prop" size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultyAdvisor;
