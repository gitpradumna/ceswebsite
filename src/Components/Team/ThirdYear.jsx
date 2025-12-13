
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import pradumnaImg from '../../assets/pradumna.jpg';
import khapnaImg from '../../assets/khapna.jpeg';
import samudrikaImg from '../../assets/samudrika.jpg';
import deekshitaImg from '../../assets/deekshita.jpg';
import anirbanImg from '../../assets/anirban.jpg';
import kartikeyImg from '../../assets/kartikey.jpg';
import chandanImg from '../../assets/chandan.jpg';
import apoorvImg from '../../assets/apoorv.jpg';
import sauravImg from '../../assets/saurav.jpg';

const ThirdYear = () => {
  const members = [
    { name: 'Pradumna Mishra', post: 'Web Developer', image: pradumnaImg },
    { name: 'Khapna Ronrang', post: 'Event Manager', image: khapnaImg },
    { name: 'Samudrika Ghosh', post: 'Social Media Handler', image: samudrikaImg },
    { name: 'Deekshitha Jannu', post: 'Graphic Designer', image: deekshitaImg },
    { name: 'Anirban Koley', post: 'Content Writer', image: anirbanImg },
    { name: 'Kartikey Shukla', post: 'Event Manager', image: kartikeyImg },
    { name: 'Chandan Mondal', post: 'Event Manager', image: chandanImg },
    { name: 'Apoorv Srivastava', post: 'Graphic Designer', image: apoorvImg },
    { name: 'Saurav Suman', post: 'Event Manager', image: sauravImg },
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
                <a href="#" target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="Instagram">
                  <BsInstagram className="social-icon-prop" size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="socialHover" aria-label="LinkedIn">
                  <BsLinkedin className="social-icon-prop" size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdYear;
