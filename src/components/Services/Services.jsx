import React from "react";
import "./Services.css";
// import "../About/About.css"
import Subscribe from "../Home/Subscribe";
import marketingIcon from "../../img/service-icon/service-page-icon/social-media.png";
import seoIcon from "../../img/service-icon/seo.png";
import webIcon from "../../img/service-icon/service-page-icon/programming.png";
import wordpressIcon from "../../img/service-icon/service-page-icon/wordpress.png";
import graphicIcon from "../../img/service-icon/service-page-icon/adobe-photoshop.png";
import commingSoon from "../../img/service-icon/service-page-icon/comming-soon.png"
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="page-head">
      <div className="d-flex align-items-center justify-content-center about-top-container">
        <div className=" about-top">
          <h2 className="fs-1">Services of Need Work</h2>
          <Link to="/" className="page-head-nav pe-3">
            Back to Home <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <section className="services">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center service-title">Our Services</h2>
            <p className="col-md-8 offset-md-2">
            Needwork is one of the best digital service providers in Bangladesh to showcase the strength of your brand. We provide website design and development, SEO, digital marketing, social media management, graphic design, digital consultancy and many more services. Perhaps you have already made a claim and you are thinking of building a website for your organization.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12" data-aos="fade-up">
              <div className="service-box">
                <img src={marketingIcon} alt="" />
                <h4>
                  <Link to="#">Digital Marketing</Link>
                </h4>
                <p>
                Welcome to Marketing Basics. We’re going to take a deep dive into digital marketing. 
We’ll explore topics such as SEO, PPC, social media and content marketing. 
Each week we’ll learn about a new topic and how you can use it to grow your business.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4 col-md-12" data-aos="fade-up">
              <div className="service-box">
                <img src={seoIcon} alt="" />
                <h4>
                  <Link to="#">SEO</Link>
                </h4>
                <p>
                One of the most effective digital marketing techniques today is search engine optimisation (SEO). 
SEO involves using various online tactics to increase the quantity and quality of web traffic from search engines to your website.
 This will enable you to increase the amount of people that find your website when they perform a search on a relevant topic,
 and it will also increase the amount of organic web traffic from search engines to your website. Search engine traffic is crucial 
to a business’s online success.
                </p>
                
              </div>
            </div>
            <div className="col-lg-4 col-md-12" data-aos="fade-up">
              <div className="service-box">
                <img src={wordpressIcon} alt="" />
                <h4>
                  <Link to="#">Wordpress</Link>
                </h4>
                <p>
                Web design & development firms are in high demand these days. The digital landscape is constantly changing and evolving,
 which means that the types of websites being built have to change and evolve alongside it. If your business is looking 
to get ahead of the curve, Hire a Freelance Web Designer is a great place to start. A freelance web designer can build 
you a modern, clean website that meets the needs of your brand today, and will be able to keep up with the ever-evolving
 digital world tomorrow.
                </p>
                
              </div>
            </div>           
            <div className="col-lg-4 col-md-12" data-aos="fade-up">
              <div className="service-box">
                <img src={webIcon} alt="" />
                <h4>
                  <Link to="#">Web Design & Development</Link>
                </h4>
                <p>
                Web design & development firms are in high demand these days. The digital landscape is constantly changing and evolving,
 which means that the types of websites being built have to change and evolve alongside it. If your business is looking 
to get ahead of the curve, Hire a Freelance Web Designer is a great place to start. A freelance web designer can build 
you a modern, clean website that meets the needs of your brand today, and will be able to keep up with the ever-evolving
 digital world tomorrow.
                </p>
                
              </div>
            </div>           
            <div className="col-lg-4 col-md-12" data-aos="fade-up">
              <div className="service-box">
                <img src={graphicIcon} alt="" />
                <h4>
                  <Link to="#">Graphic Design</Link>
                </h4>
                <p>
                We all know the power of a good logo. One that’s unique and instantly recognisable, it symbolises an idea and personality 
and can help build your business. But a logo is more than just a pretty face. It also plays a crucial role in how you’re 
perceived as a business.
--------------------------
                </p>
                
              </div>
            </div>
            <div className="col-lg-4 col-md-12 " data-aos="fade-up">
              <div className="service-box  h-50 bg-secondary py-5">
                <img src={commingSoon} alt="" />
                <h4>
                  <Link className="text-white" to="#">Our new service coming soon...</Link>
                </h4>
                
                
              </div>
            </div>
          </div>
        </div>
        <Link data-aos="fade-up" to="/contract" className="btn about-btn rounded-pill text-white">
            Let's get started
          </Link>
      </section>
      <Subscribe />
    </div>
  );
};

export default Services;
