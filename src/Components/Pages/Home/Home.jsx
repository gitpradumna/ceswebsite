import React, { useState } from 'react';
import Hero from '../../Hero/Hero';
import About from '../../About/About';
import Title from '../../Title/Title';
import Programs from '../../Programs/Programs';
import Campus from '../../Campus/Campus';
import Testimonials from '../../Testimonials/Testimonials';
import Contact from '../../Contact/Contact';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';
import Announcements from '../../Announcements/Announcements';

const Home = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Title subTitle='Our EVENTS' title='What We Offer' />
        <Programs />
        
        <Announcements />
        
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Office Bearers' title='What They Say' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default Home;
