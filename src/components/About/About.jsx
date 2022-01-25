import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Subscribe from "../Home/Subscribe";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="page-head">
      <div className="d-flex align-items-center justify-content-center about-top-container">
        <div className=" about-top">
          <h2 className="fs-1">About Need Work</h2>
          <Link to="/" className="page-head-nav pe-3">
            Back to Home <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="about-section container">
        <div className="about-us">
          <h2 className="text-center about-title">Who Are We?</h2>
          <h5 className="text-center ">
            We are a Digital Services Provider Company, we provide digital
            solution such as Digital Marketing, Search Engine Optimisation, Web
            Design & Development, Graphic Designing many more.
          </h5>
          <p>
          Needwork is one of the best digital service providers in Bangladesh to showcase the strength of your brand. We provide website design and development, SEO, digital marketing, social media management, graphic design, digital consultancy and many more services. Perhaps you have already made a claim and you are thinking of building a website for your organization, 
          </p>
        </div>
        <div className="our-mission">
            <h2 className="text-center about-title">Our mission affordable Digital Service for small business</h2>
            <p>Whether you are a small or local business owner, we are the appropriate hand to handle your business. Our expert digital marketing and SEO services are now available in Dhaka, New York, Dubai, Boston, Bali, Bangkok, and a number of other countries. We provide a competent and cost-effective service.</p>
        </div>
        <div className="why-best">
            <h2 className="text-center about-title">Why we say - we are the best <span className="highlight">Digital Service Provider</span> in Bangladesh?</h2>
            <ul>
                <li><i className="fas fa-hand-point-right pe-2"></i> We offer a full package of Digital Service.</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We provide you fully responsive Website for your Business.</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We Provide result driven Digital Marketing Solutions</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We follow 100% White hat SEO method.</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We try our best to rank your site within ASAP!</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We provide you full package of Graphic Design Service.</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We will provide you 24/7 support.</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> We will provide you exactly what you need.</li>
                <li><i className="fas fa-hand-point-right pe-2"></i> If you are not satisfied or not result driven work, we will refund you.</li>
            </ul>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default About;
