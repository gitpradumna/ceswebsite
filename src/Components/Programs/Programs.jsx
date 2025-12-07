import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  const events = [
    {
      id: 1,
      image: program_1,
      title: "Technical Workshops",
      description: "Hands-on workshops covering advanced civil engineering topics, industry practices, and emerging technologies."
    },
    {
      id: 2,
      image: program_2,
      title: "Guest Lectures",
      description: "Expert insights from industry professionals, alumni, and faculty on career development and innovations."
    },
    {
      id: 3,
      image: program_3,
      title: "Project Expo",
      description: "Showcase your academic projects and learn from peers in a collaborative and competitive environment."
    }
  ];

  return (
    <div className='programs' id='program'>
      {events.map((event) => (
        <div className="program" key={event.id}>
          <img src={event.image} alt={event.title} />
          <div className="caption">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Programs
