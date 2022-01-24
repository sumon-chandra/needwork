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
        <div data-aos="fade-up" className="home-about-img w-100">
          
          <iframe className="col-12" src="https://www.youtube.com/embed/m1WcPRQzNdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div data-aos="fade-up" className="home-about-text">
          <h3>We Offer a Full Range of Digital Services!</h3>
          <p className="home-about-title-2">
            We are the <span className="highlight">#1 Digital service provider</span>  Agency in Bangladesh. We provide <span className="highlight">a bunch of Digital Service</span>.
          </p>
          <p className="home-about-desc">Needwork is one of the best digital service providers in Bangladesh to reveal the power of your brand. We provide website design and development, SEO, Digital marketing, social media management, Graphic design, digital consultancy, and many more services.</p>
          <Link data-aos="fade-up" to="/about-us" className="btn about-btn rounded-pill text-white">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
