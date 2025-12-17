
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import tanyaImg from '../../assets/tanya.jpg';
import anshikaImg from '../../assets/anshika.jpg';
import swapnilImg from '../../assets/swapnil.jpg';
import hudsonImg from '../../assets/hudson.jpg';
import supriyaImg from '../../assets/supriya.jpg'
import vineetImg from '../../assets/vineet.jpg'
import tejasImg from '../../assets/tejas.jpg'
import poornachandraImg from '../../assets/poornachandra.JPG'
import dharmanaImg from '../../assets/dharmana.jpg'
import deepsikaImg from '../../assets/deepsika.jpeg'
import ankitaImg from '../../assets/ankita.jpg'
import ambedkarImg from '../../assets/ambedkar.jpg'

const FourthYear = () => {
  const members = [
    { 
      name: 'Tanya Kumari', 
      post: 'President', 
      image: tanyaImg,
      linkedin: 'https://www.linkedin.com/in/iamtanyakumari/',
      instagram: ''
    },
    { 
      name: 'Supriya Roy ', 
      post: 'Vice President', 
      image: supriyaImg,
      linkedin: 'https://www.linkedin.com/in/supriya-roy-8872422a5',
      instagram: 'https://www.instagram.com/supriyaroy4245'
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
    { 
      name: 'Tejas Kumar', 
      post: 'Convenor', 
      image: tejasImg,
      linkedin: 'https://www.linkedin.com/in/tejas-kumar-8b0b2525a',
      instagram: ''
    },
    { 
      name: 'K.Poorna Chandra',
      post: 'Graphic Design head',
      image: poornachandraImg,
      linkedin: 'https://www.linkedin.com/in/poorna-chandra-kollati-5b2b172a5/',
      instagram: 'https://www.instagram.com/poorna_chandra_k_'
    },
    { 
      name: 'Ambedkar Kumar ',
      post: 'Graphic Design head',
      image: ambedkarImg,
      linkedin: 'https://www.linkedin.com/in/ambedkar-kumar-9a3177384',
      instagram: 'https://www.instagram.com/ambed_87'
    },
    { 
      name: 'Dharmana Eswar sai', 
      post: 'Head Web Development', 
      image: dharmanaImg,
      linkedin: 'https://www.linkedin.com/in/eswar-sai-dharmana-9b8049261',
      instagram: 'https://www.instagram.com/eswarxdharmana'
    },
    { 
      name: 'Deepsika bishoye', 
      post: 'Sponsorship Head', 
      image: deepsikaImg,
      linkedin: 'https://www.linkedin.com/in/deepsika-bishoye-946737284',
      instagram: 'https://www.instagram.com/deepsika_bishoye'
    },
    { 
      name: 'Ankita Baidya', 
      post: 'Content Head', 
      image: ankitaImg,
      linkedin: 'https://www.linkedin.com/in/ankita-baidya-29374629b',
      instagram: 'https://www.instagram.com/u_x_blaxk'
    },
    { 
      name: 'Ongwec Hudson', 
      post: 'Senior Event Manager', 
      image: hudsonImg,
      linkedin: 'https://www.linkedin.com/in/ongwec-hudson-0b1b49277/',
      instagram: 'https://www.instagram.com/hudsonongwec/'
    },
    { 
      name: 'Vineet Bhagat ', 
      post: 'Senior Event Manager', 
      image: vineetImg,
      linkedin: 'https://www.linkedin.com/in/vineet-bhagat-6378b919a',
      instagram: 'https://www.instagram.com/vineet_3046'
    },
  ];
  return (
    <section className="team-subsection fourth-year">
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

export default FourthYear;
