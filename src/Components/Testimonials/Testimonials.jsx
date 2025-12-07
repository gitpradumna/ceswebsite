import React from 'react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const bearers = [
    {
      id: 1,
      name: 'Vaibhav Kumar',
      position: 'President, CES',
      image: user_1
    },
    {
      id: 2,
      name: 'Harika Boddu',
      position: 'Vice President, CES',
      image: user_2
    },
    {
      id: 3,
      name: 'Pawan Pratap',
      position: 'General Secretary, CES',
      image: user_3
    },
    {
      id: 4,
      name: 'Vamsi Gara',
      position: 'Tech Head, CES',
      image: user_4
    }
  ];

  return (
    <div className='testimonials'>
      <div className="bearers-grid">
        {bearers.map(bearer => (
          <div key={bearer.id} className="bearer-card">
            <img src={bearer.image} alt={bearer.name} />
            <div className="bearer-info">
              <h1>{bearer.name}</h1>
              <h2>{bearer.position}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
