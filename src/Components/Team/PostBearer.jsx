import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import tanyaImg from '../../assets/tanya.jpg';
import anshikaImg from '../../assets/anshika.jpg';
import swapnilImg from '../../assets/swapnil.jpg';
import hudsonImg from '../../assets/hudson.jpg';

const PostBearer = () => {
  const members = [
    { 
      name: 'Tanya Kumari', 
      post: 'President', 
      image: tanyaImg,
      linkedin: 'https://www.linkedin.com/in/iamtanyakumari/',
      instagram: ''
    },
    { 
      name: 'Anshika', 
      post: 'General Secretary', 
      image: anshikaImg,
      linkedin: 'https://www.linkedin.com/in/anshika-a89083395/',
      instagram: 'https://www.instagram.com/953_anshika/'
    },
    { 
      name: 'Swapnil Ghosh', 
      post: 'Assistant General Secretary', 
      image: swapnilImg,
      linkedin: 'https://www.linkedin.com/in/swapnil-ghosh-882349260/',
      instagram: 'https://www.instagram.com/__sickboy__sg18/'
    },
  ];
  
  return (
    <section className="team-subsection post-bearer">
      <div className="team-grid">
        {members.map((member, idx) => (
          <div key={idx} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="team-post">{member.post}</p>
              <div className="team-card-social" style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="Instagram">
                    <BsInstagram className="social-icon-prop" size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="LinkedIn">
                    <BsLinkedin className="social-icon-prop" size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostBearer;
