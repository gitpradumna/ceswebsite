import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import "../../assets/hero.png"

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <div className="about-badge">About CES</div>
        <h2>Nurturing Tomorrow's Infrastructure Leaders Today</h2>
        <p className="about-intro">The Civil Engineering Society at NIT Durgapur is a vibrant community of passionate students, builders, and problem solvers dedicated to shaping the future of infrastructure and civil engineering.</p>
        
        <div className="about-section">
          <h3>Who Are We</h3>
          <p>We are a community of passionate civil engineering students. We are builders as well as problem solvers - without us there would be no shelter to stay and no medium (roads and railways) to travel from one place to another. We are here to grow and strengthen the civil engineering students community at NIT Durgapur and connect our members to all the people, resources, and opportunities they need to achieve their goals.</p>
        </div>
        
        <div className="about-section">
          <h3>Our Vision</h3>
          <p>Our vision is to create a dynamic platform for intellectual exchange, where members engage in workshops, events and guest lectures by esteemed professionals. We forge connections with peers, seniors and alumni, drawing upon their insights, experiences and expertise. We aim to organize skill development workshops and training sessions that prepare students for real-world challenges.</p>
        </div>
        
        <div className="about-section">
          <h3>Our Journey</h3>
          <p>We started with a shared vision of fostering knowledge and networking opportunities within our field. Organizing various webinars and events has become a cornerstone of our mission, allowing us to connect with faculties and alumni, share insights and stay abreast of the latest developments and opportunities in civil engineering. Through perseverance and a shared passion, we continue to inspire and support each other in our personal and academic growth.</p>
        </div>
      </div>
    </div>
  )
}

export default About
