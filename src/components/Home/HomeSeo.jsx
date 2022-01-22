import React, { useEffect } from "react";
import "./Home.css";
import img1 from "../../img/home-seo/seo-1.svg";
import img2 from "../../img/home-seo/seo-2.svg";
import img3 from "../../img/home-seo/seo-3.svg";
import img4 from "../../img/home-seo/seo-4.png";
import { Link } from "react-router-dom";
import Aos from "aos";

const HomeSeo = () => {
  useEffect( () => {
    Aos.init({duration:1000})
  }, [])
  return (
    <div className="container py-5 text-center">
      <div>
        <h3 data-aos="fade-right" className="home-seo-title fs-2">
          We Will Rank Your Website on the Top of Google. Our SEO service will
          Boost Your Business
        </h3>
        <p data-aos="fade-left" className="fs-5 home-seo-desc py-3 mx-auto">
          Before starting SEO of a Website, We run a deep audit and competitor
          analysis.
        </p>
      </div>
      {/* ================ Cards =============== */}
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2">
        <div className="col" data-aos="fade-up">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img1} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body px-0">
              <h5 className="card-title fw-bold">AUDIT & ANALYSIS</h5>
              <p className="card-text">
                When we start SEO of a website, We do a deep website audit and
                competitors' backlinks analysis
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img2} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body px-0">
              <h5 className="card-title fw-bold">KEYWORD RESEARCH</h5>
              <p className="card-text">
                We do deep keyword research for you. We also do spying on your
                competitors. We select the best keywords for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img3} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body px-0">
              <h5 className="card-title fw-bold">STRATEGY</h5>
              <p className="card-text">
                After deep Audit, We solve the technical issues and make a
                strategy for both on-page & off-page search engine optimization
                for your website.
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img4} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body px-0">
              <h5 className="card-title fw-bold">IMPLEMENTATION</h5>
              <p className="card-text">
                After fixing the SEO/SMM/SEM startegy by doing competitor
                research and other stuff. We start implementing those on your
                website.
              </p>
            </div>
          </div>
        </div>
        <div className="home-seo-btn-container" data-aos="fade-up">
          
            <Link to="#" className="btn home-seo-btn    rounded-pill">
              View more
            </Link>
          
            <Link to="#" className="btn home-seo-btn   rounded-pill">
              Get started
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default HomeSeo;
