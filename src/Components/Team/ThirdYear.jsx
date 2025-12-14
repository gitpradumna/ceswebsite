
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import pradumnaImg from '../../assets/pradumna.jpg';
import khapnaImg from '../../assets/khapna.jpeg';
import samudrikaImg from '../../assets/samudrika.jpg';
import deekshitaImg from '../../assets/deekshita.jpg';
import anirbanImg from '../../assets/anirban.jpg';
import kartikeyImg from '../../assets/kartikeya.jpg';
import chandanImg from '../../assets/chandan.jpg';
import apoorvImg from '../../assets/apoorv.jpg';
import sauravImg from '../../assets/saurav.jpg';
import alokImg from '../../assets/alok.jpeg';
import surajImg from '../../assets/suraj.jpg';

const ThirdYear = () => {
  const members = [
    { 
      name: 'Pradumna Mishra', 
      post: 'Web Developer', 
      image: pradumnaImg,
      linkedin: 'https://www.linkedin.com/in/pradumnamishra/',
      instagram: 'https://www.instagram.com/itspradumna/'
    },
    {
      name: 'Alok Raj',
      post: 'Graphic Designer',
      image: alokImg,
      linkedin: 'https://www.linkedin.com/in/alok-raj-55b36a28a/',
      instagram: 'https://www.instagram.com/alok_raj0304/'
    },
    { 
      name: 'Khapna Ronrang', 
      post: 'Event Manager', 
      image: khapnaImg,
      linkedin: 'https://www.linkedin.com/in/khapna-ronrang-517437331/',
      instagram: 'https://www.instagram.com/kpna_02/'
    },
    { 
      name: 'Samudrika Ghosh', 
      post: 'Social Media Handler', 
      image: samudrikaImg,
      linkedin: 'https://www.linkedin.com/in/samudrika-ghosh-787b1033b/',
      instagram: 'https://www.instagram.com/oyesam_12/'
    },
    { 
      name: 'Deekshitha Jannu', 
      post: 'Graphic Designer', 
      image: deekshitaImg,
      linkedin: 'https://www.linkedin.com/in/deekshitha-jannu-4169a42b8/',
      instagram: ''
    },
    { 
      name: 'Anirban Koley', 
      post: 'Content Writer', 
      image: anirbanImg,
      linkedin: 'https://www.linkedin.com/in/anirban-koley-1b2330308/',
      instagram: 'https://www.instagram.com/anirbaannn_1945/'
    },
    { 
      name: 'Kartikey Shukla', 
      post: 'Event Manager', 
      image: kartikeyImg,
      linkedin: '',
      instagram: ''
    },
    { 
      name: 'Chandan Mondal', 
      post: 'Event Manager', 
      image: chandanImg,
      linkedin: '',
      instagram: ''
    },
    { 
      name: 'Apoorv Srivastava', 
      post: 'Graphic Designer', 
      image: apoorvImg,
      linkedin: 'https://www.linkedin.com/in/apoorv-srivastava-236b85281/',
      instagram: 'https://www.instagram.com/sri_apoorv_10/'
    },
    { 
      name: 'Saurav Suman', 
      post: 'Event Manager', 
      image: sauravImg,
      linkedin: 'https://www.linkedin.com/in/saurav-suman-a62592246/',
      instagram: 'https://www.instagram.com/itz_saurav261/'
    },
    {
      name: 'Suraj Kumar',
      post: 'Content Writer',
      image: surajImg,
      linkedin: 'www.linkedin.com/in/suraj-kumar-694a1535b',
      instagram: 'https://www.instagram.com/samir_arya_1326/'
    }
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

export default ThirdYear;
