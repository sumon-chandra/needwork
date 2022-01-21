import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import graphicIcon from "../../img/service-icon/graphic-designer.png";
import webIcon from "../../img/service-icon/web.png";
import seoIcon from "../../img/service-icon/seo.png";
import marketingIcon from "../../img/service-icon/marketing.png";
import "./Home.css";
import Aos from "aos";

const HomePageServices = () => {
  useEffect( () => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div className="container">
      <div data-aos="fade-up" className="head-title text-center">
        <h1> Our Services</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        <div data-aos="fade-right" className="col">
          <div className="card border-0">
            <img
              src={marketingIcon}
              className="card-img-top home-service-img"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title   fw-normal font-normal pb-3">
                Digital marketing
              </h5>
              <p className="card-text">
                Welcome to Marketing Basics. We’re going to take a deep dive
                into digital marketing. We’ll explore topics such as SEO, PPC,
                social media and content marketing. Each week we’ll learn about
                a new topic and how you can use it to grow your business.
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">
                View more
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="col">
          <div className="card border-0">
            <img
              src={seoIcon}
              className="card-img-top home-service-img"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title   fw-normal font-normal pb-3">
                Search Engine Optimisation
              </h5>
              <p className="card-text">
              We are offering an SEO service for your website, we can do it by on-page SEO, off-page SEO, to our clients. We are offering SEO services to our clients at an affordable prices. 
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">
                View more
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className="col">
          <div className="card border-0">
            <img
              src={webIcon}
              className="card-img-top home-service-img"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title   fw-normal font-normal pb-3">
                Web Design & Development
              </h5>
              <p className="card-text">
                We build beautiful and functional websites, then help our
                clients to manage and promote them. We specialize in creating
                websites for small businesses, but we can help with all your web
                needs. We can also help with website troubleshooting and
                maintenance so you don't need to worry about keeping your site
                up-to-date and secure.
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">
                View more
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="col">
          <div className="card border-0">
            <img
              src={graphicIcon}
              className="card-img-top home-service-img"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title   fw-normal font-normal pb-3">
                Graphic Design
              </h5>
              <p className="card-text">
             We provide a full spectrum of design services. Our team of designers and brand strategists is committed to providing high-quality design and brand strategy at an affordable price. We also offer a 100% satisfaction guarantee on all of our design services.              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">
                View more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
