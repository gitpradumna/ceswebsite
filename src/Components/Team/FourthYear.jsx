
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import tanyaImg from '../../assets/tanya.jpg';
import anshikaImg from '../../assets/anshika.jpg';
import swapnilImg from '../../assets/swapnil.jpg';
import hudsonImg from '../../assets/hudson.jpg';

const FourthYear = () => {
  const members = [
    { name: 'Tanya Kumari', post: 'President', image: tanyaImg },
    { name: 'Anshika', post: 'General Secretary', image: anshikaImg },
    { name: 'Swapnil Ghosh', post: 'Assistant General Secretary', image: swapnilImg },
    { name: 'Ongwec Hudson', post: 'Senior Event Manager', image: hudsonImg },
  ];
  return (
    <section className="team-subsection fourth-year">
      <h2>4th Year</h2>
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

export default FourthYear;
