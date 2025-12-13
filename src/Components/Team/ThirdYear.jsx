
import { BsInstagram, BsLinkedin } from 'react-icons/bs';


const ThirdYear = () => {
  const members = [
    { name: 'Pradumna Mishra', post: 'Web Developer', image: '/src/assets/pradumna.jpg' },
    { name: 'Khapna Ronrang', post: 'Event Manager', image: '/src/assets/khapna.jpeg' },
    { name: 'Samudrika Ghosh', post: 'Social Media Handler', image: '/src/assets/samudrika.jpg' },
    { name: 'Deekshitha Jannu', post: 'Graphic Designer', image: '/src/assets/deekshita.jpg' },
    { name: 'Anirban Koley', post: 'Content Writer', image: '/src/assets/anirban.jpg' },
    { name: 'Kartikey Shukla', post: 'Event Manager', image: '/src/assets/kartikey.jpg' },
    { name: 'Chandan Mondal', post: 'Event Manager', image: '/src/assets/chandan.jpg' },
    { name: 'Apoorv Srivastava', post: 'Graphic Designer', image: '/src/assets/apoorv.jpg' },
    { name: 'Saurav Suman', post: 'Event Manager', image: '/src/assets/saurav.jpg' },
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
