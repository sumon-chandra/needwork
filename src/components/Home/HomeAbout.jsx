import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import homeAboutImg from "../../img/about/home-about.png";
import "./Home.css"

const HomeAbout = () => {
  useEffect( () => {
    Aos.init({duration:1000})
  },[])
  return (
    <div className="container">
      <div data-aos="fade-up" className="head-title text-center">
        <h1>About <span className="highlight">Need Work</span> </h1>
      </div>
      <div className=" about-container">
        <div data-aos="fade-left" className="home-about-img">
          <img src={homeAboutImg} alt="" />
        </div>
        <div data-aos="fade-right" className="home-about-text">
          <h3>We Offer a Full Range of Digital Marketing Services!</h3>
          <p className="home-about-title-2">
            We are the <span className="highlight">#1 Digital Marketing</span>  Agency in Bangladesh. We provide the
            best SEO Services in Bangladesh
          </p>
          <p className="home-about-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ex, exercitationem aperiam eaque excepturi provident cupiditate inventore voluptatibus iure quibusdam officia! Consectetur perferendis earum possimus voluptatum, maiores vel sed reprehenderit.</p>
          <Link to="#" className="btn about-btn rounded-pill text-white">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
