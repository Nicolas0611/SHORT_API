import React from "react";
import heroImage from "../../assets/images/illustration-working.svg";
const Hero = () => {
  return (
    <div className="container hero-grid">
      <div className="hero-content">
        <h1 className="hero-text">More than just shorter links</h1>
        <p className="hero-parragraph">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="button hero-button">
          <a className="navbar-link" href="">
            Get Started
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img className="hero-image_img" src={heroImage} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
