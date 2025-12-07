import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "..Testimonials/teamCard";
const cards = [
  {
    id: 1,
    src: "https://freeimghost.net/images/2024/02/03/himanshukhaitan.webp",
    name: "Himanshu Khaitan",
    position: "President",
    instagram: "hima_khaitan",
    linkedin: "in/himakhaitan",
    twitter: "hima_khaitan",
  },
  {
    id: 2,
    src: "https://freeimghost.net/images/2024/02/03/anuragsharma.webp",
    name: "Anurag Sharma",
    position: "Vice-President",
    instagram: "anurrag.s",
    linkedin: "in/anurag-sharma-a47b611b1/",
    twitter: "anurrag_s",
  },
  {
    id: 3,
    src: "https://freeimghost.net/images/2023/04/14/sindhusingh.webp",
    name: "Sindhu Singh",
    position: "General Secretary",
    instagram: "sindhu_singh__",
    linkedin: "in/sindhu-singh-b44720218",
    twitter: "sindhu__007",
  },
  {
    id: 4,
    src: "https://freeimghost.net/images/2024/02/03/archishmandas.webp",
    name: "Archisman Das",
    position: "Treasurer",
    instagram: "archishman_das",
    linkedin: "in/archishman-das-4584b21a0/",
    twitter: "das_archishman",
  },
  {
    id: 5,
    src: "https://freeimghost.net/images/2024/02/03/shaktishankarkarmakar.webp",
    name: "Shankti Karmakar",
    position: "Convenor",
    instagram: "suvro_23",
    linkedin: "in/shakti-karmakar-5676401aa/",
    twitter: "",
  },
  {
    id: 6,
    src: "https://freeimghost.net/images/2024/02/11/rajuda.jpeg",
    name: "Raju Kumar",
    position: "Add. General Secretary",
    instagram: "aryan.raj8080",
    linkedin: "in/rajukumar6",
    twitter: "",

  },
  {
    id: 7,
    src: "https://freeimghost.net/images/2023/04/14/suddhasilchatterjee.webp",
    name: "Suddhasil Chatterjee",
    position: "Event Head",
    instagram: "suddhasilc",
    linkedin: "in/suddhasilchatterjee",
    twitter: "suddhasilc",
  },
  {
    id: 8,
    src: "https://freeimghost.net/images/2023/04/14/adityaghosh.webp",
    name: "Aditya Ghosh",
    position: "Web-Dev Head",
    instagram: "adityaghosh9190",
    linkedin: "in/aditya-ghosh-719216219/",
    twitter: "aditya__ghosh__",
  },
  {
    id: 9,
    src: "https://freeimghost.net/images/2023/04/14/shubhammundhra.webp",
    name: "Shubham Mundhra",
    position: "App-Dev Head",
    instagram: "_the_mundhra_",
    linkedin: "in/shubham-mundhra-62b32b242/",
    twitter: "",
  },
  {
    id: 10,
    src: "https://freeimghost.net/images/2023/04/14/gowthamsatya.webp",
    name: "Satya Gowtham",
    position: "Operations Head",
    instagram: "satyagowtham12",
    linkedin: "in/gowtham-satya-213257231",
    twitter: "",
  },
  {
    id: 11,
    src: "https://freeimghost.net/images/2023/04/14/satyamrajput.webp",
    name: "Satyam Rajput",
    position: "Publicity Head",
    instagram: "____.satyam.__",
    linkedin: "in/satyam-rajput-b8420b211",
    twitter: "",
  },
  {
    id: 12,
    src: "https://freeimghost.net/images/2023/04/14/nilashismukherjee.webp",
    name: "Nilashis Mukherjee",
    position: "Research Head",
    instagram: "nilashism",
    linkedin: "in/nilashis-mukherjee-5b2247210",
    twitter: "",
  },
];

var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4,
  initialSlide: 0,
  slidesToScroll: 1,
  autoplay: true,
  arrow: false,
  infinite: true,
  swipeToSlide: true,
  pauseOnHover: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Carousels = () => {
  return (
    <div>
      <Slider {...settings}>
        {cards.map((item, index) => (
          <TeamCard
            src={item.src}
            name={item.name}
            position={item.position}
            key={index}
            linkedin={item.linkedin}
            instagram={item.instagram}
            twitter={item.twitter}

          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousels;