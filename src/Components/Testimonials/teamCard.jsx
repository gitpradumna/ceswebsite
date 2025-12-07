import React from "react";
import "./teamCard.css";

import {
    BsInstagram,
    BsLinkedin,
    BsTwitter
} from "react-icons/bs";

const teamCard = (props) => {
    return ( <
        div className = "teamCard-div" > {
            /* <div className="card-img-div">
                    <img src={props.src} alt="img" />
                  </div>
                  <div className="card-text-div">
                    <h1>{props.name}</h1>
                    <h3>{props.position}</h3>
                    <div className="team-card-social">
                      <InstagramIcon className="social-icon-prop" />
                      <LinkedInIcon className="social-icon-prop" />
                      <TwitterIcon className="social-icon-prop" />
                    </div>
                  </div> */
        } <
        div className = "card-img-div" >
        <
        img src = {
            props.src
        }
        alt = "img" / >
        <
        /div> <
        div className = "card-text-div" >
        <
        h1 > {
            props.name
        } < /h1> <
        h3 > {
            props.position
        } < /h3> <
        div className = "team-card-social" >
        <
        a href = {
            `https://www.instagram.com/${props.instagram}`
        }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "socialHover" >
        <
        BsInstagram className = "social-icon-prop" / > < /a>

        <
        a href = {
            `https://www.linkedin.com/${props.linkedin}`
        }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "socialHover" > < BsLinkedin className = "social-icon-prop" / > < /a> <
        a href = {
            `https://twitter.com/${props.twitter}`
        }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "socialHover" >
        <
        BsTwitter className = "social-icon-prop" / > < /a> <
        /div> <
        /div> <
        /div>
    );
};

export default teamCard;