import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import pradumnaImg from '../../assets/pradumna.jpg';
import khapnaImg from '../../assets/khapna.jpeg';
import samudrikaImg from '../../assets/samudrika.jpg';
import deekshitaImg from '../../assets/deekshita.jpg';
import anirbanImg from '../../assets/anirban.jpg';
import kartikeyImg from '../../assets/kartikeya.jpg';
import chandanImg from '../../assets/chandan.jpg';
import apoorvImg from '../../assets/apoorv.webp';
import sauravImg from '../../assets/saurav.jpg';
import alokImg from '../../assets/alok.jpeg';
import surajImg from '../../assets/suraj.jpg';
import manishImg from '../../assets/manishkumar.jpg'
import shikhaImg from '../../assets/shikhakumari.jpg'
import asthaImg from '../../assets/astha.jpg'

const FourthYear = () => {
  const members = [
    { 
      name: 'Kartikey Shukla', 
      post: 'President', 
      image: kartikeyImg,
      linkedin: '',
      instagram: ''
    },
    { 
      name: 'Samudrika Ghosh', 
      post: 'Vice President', 
      image: samudrikaImg,
      linkedin: 'https://www.linkedin.com/in/samudrika-ghosh-787b1033b/',
      instagram: 'https://www.instagram.com/oyesam_12/'
    },
    {
      name: 'Alok Raj',
      post: 'General Secretary',
      image: alokImg,
      linkedin: 'https://www.linkedin.com/in/alok-raj-55b36a28a/',
      instagram: 'https://www.instagram.com/alok_raj0304/'
    },
    {
      name: 'Shikha Kumari Mallah',
      post: 'Assistant General Secretary',
      image: shikhaImg,
      linkedin: 'https://www.linkedin.com/in/shikha-kumari-mallah-446b2224a/',
      instagram: 'https://www.instagram.com/shikha.m.005'
    },
    { 
      name: 'Apoorv Srivastava', 
      post: 'Treasurer', 
      image: apoorvImg,
      linkedin: 'https://www.linkedin.com/in/apoorv-srivastava-236b85281/',
      instagram: 'https://www.instagram.com/sri_apoorv_10/'
    },
    {
      name: 'Astha Kumari',
      post: 'Convenor',
      image: asthaImg,
      linkedin: '',
      instagram: 'https://www.instagram.com/astha_9994'
    },
    { 
      name: 'Pradumna Mishra', 
      post: 'Head Web Development', 
      image: pradumnaImg,
      linkedin: 'https://www.linkedin.com/in/pradumnamishra/',
      instagram: 'https://www.instagram.com/itspradumna/'
    },
    { 
      name: 'Khapna Ronrang', 
      post: 'Sponsorship Head', 
      image: khapnaImg,
      linkedin: 'https://www.linkedin.com/in/khapna-ronrang-517437331/',
      instagram: 'https://www.instagram.com/kpna_02/'
    },
    { 
      name: 'Deekshitha Jannu', 
      post: 'Sponsorship Head', 
      image: deekshitaImg,
      linkedin: 'https://www.linkedin.com/in/deekshitha-jannu-4169a42b8/',
      instagram: ''
    },
    {
      name: 'Manish Kumar',
      post: 'Event Head',
      image: manishImg,
      linkedin: 'https://www.linkedin.com/in/manish-kumar-049840322',
      instagram: 'https://www.instagram.com/m.yadav_a'
    },
    { 
      name: 'Saurav Suman', 
      post: 'Event Head', 
      image: sauravImg,
      linkedin: 'https://www.linkedin.com/in/saurav-suman-a62592246/',
      instagram: 'https://www.instagram.com/itz_saurav261/'
    },
    { 
      name: 'Anirban Koley', 
      post: 'Alumni Interaction Head', 
      image: anirbanImg,
      linkedin: 'https://www.linkedin.com/in/anirban-koley-1b2330308/',
      instagram: 'https://www.instagram.com/anirbaannn_1945/'
    },
    { 
      name: 'Chandan Mondal', 
      post: 'Alumni Interaction Head', 
      image: chandanImg,
      linkedin: '',
      instagram: ''
    },
    {
      name: 'Suraj Kumar',
      post: 'Content Head',
      image: surajImg,
      linkedin: 'www.linkedin.com/in/suraj-kumar-694a1535b',
      instagram: 'https://www.instagram.com/samir_arya_1326/'
    },
  ];
  return (
    <section className="team-subsection third-year">
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
