import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        {/* <video width="720" height="480" controls>
          <source src="src\Components\Ventz_video.mp4" type="video/mp4" />
        </video> */}
        <iframe
          width="520"
          height="380"
          src="https://www.youtube.com/embed/u5atAT6lubQ?si=AceViui5bZDO3pQf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading" id="about">About</p>
        <h2 className="primary-heading">
          Ventz Event Platform
        </h2>
        {/* <p className="primary-text">
          Welcome to Ventz, your go-to platform for discovering and participating in a diverse array of events and activities! At Ventz, we're dedicated to simplifying event exploration and attendance while catering to the ever-evolving needs of both organizers and attendees.
        </p> */}
        <p className="primary-text" style={{lineHeight:1.6}}>
        Our platform leverages AI-driven suggestions to curate personalized event recommendations based on your preferences. Whether you're into musical events, cultural festivals, workshops, sports events, or anything in between, Ventz has something for everyone. You can choose to maintain a distinct profile or explore anonymously, ensuring a customized experience tailored to your comfort level.
        </p>
      </div>
    </div>
  );
};

export default About;

