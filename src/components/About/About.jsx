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
          <Link to="/home" className="page-head-nav pe-3">
            Back to Home <i class="fas fa-arrow-right"></i>
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
            We Avista Digital like to work for the small businesses. our mission
            is to grow your business bigger. That means. Your business is our
            business. We have been providing Digital Marketing services for the
            last 3 years. We help various local businessess to grow their
            business locally. We provide SEO (Search Engine Optimization), SEM
            (Search Engine Marketing), SMM (Social Media Marketing), Content
            Marketing, Email Marketing and All kinds of Graphics Design
            solutions. <br /> <br />
            If you are small or local business owner, We are the best hand to
            handle your Digital Marketing. Right now, We provide our
            Professional SEO services to Dhaka, New York, Dubai, Boston, Bali,
            Bangkok etc cities. Our SEO Service is 100% Professional and
            Affordable.
          </p>
        </div>
        <div className="our-mission">
            <h2 className="text-center about-title">Our mission affordable Digital Service for small business</h2>
            <p>Our Mission is very crystal clear, We are here to help the small business. The big businesses have very big marketing budget, So they are getting advantages. But small businesses cannot get the advantages with small SEO or Digital marketing budget. So our mission is to provide you Preofessional SEO and Digital Marketing services at afoordable prices.</p>
        </div>
        <div className="why-best">
            <h2 className="text-center about-title">Why we say - we are the best <span className="highlight">DIgital Service Provider</span> in Bangladesh?</h2>
            <ul>
                <li><i class="fas fa-hand-point-right pe-2"></i> Our SEO Services are Affordable</li>
                <li><i class="fas fa-hand-point-right pe-2"></i> We Provide result driven Digital Marketing Solutions</li>
                <li><i class="fas fa-hand-point-right pe-2"></i> We follow 100% White hat SEO method.</li>
                <li><i class="fas fa-hand-point-right pe-2"></i> We try our best to rank your site within ASAP!</li>
                <li><i class="fas fa-hand-point-right pe-2"></i> We will provide you 24/7 support.</li>
                <li><i class="fas fa-hand-point-right pe-2"></i> We will provide you exactly what you need.</li>
                <li><i class="fas fa-hand-point-right pe-2"></i> If you are not satisifed or not result driven work, we will refund you.</li>
            </ul>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default About;
