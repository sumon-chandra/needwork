import React from "react";
import "./Home.css";
import img1 from "../../img/seo/seo-1.svg";
import img2 from "../../img/seo/seo-2.svg";
import img3 from "../../img/seo/seo-3.svg";
import img4 from "../../img/seo/seo-4.png";
import { Link } from "react-router-dom";

const HomeSeo = () => {
  return (
    <div className="container py-5 text-center">
      <div>
        <h3 className="home-seo-title fs-2">
          We Will Rank Your Website on the Top of Google. Our SEO service will
          Boost Your Business
        </h3>
        <p className="fs-5 home-seo-desc py-3 w-50 mx-auto">
          Before starting SEO of a Website, We run a deep audit and competitor
          analysis.
        </p>
      </div>
      {/* ================ Cards =============== */}
      <div className="row row-cols-2 row-cols-sm-4 g-4">
        <div className="col">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img1} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">AUDIT & ANALYSIS</h5>
              <p className="card-text">
                When we start SEO of a website, We do a deep website audit and
                competitors' backlinks analysis
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img2} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">KEYWORD RESEARCH</h5>
              <p className="card-text">
                We do deep keyword research for you. We also do spying on your
                competitors. We select the best keywords for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img3} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">STRATEGY</h5>
              <p className="card-text">
                After deep Audit, We solve the technical issues and make a
                strategy for both on-page & off-page search engine optimization
                for your website.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card d-flex flex-column align-items-center border-0">
            <img src={img4} className="card-img-top home-seo-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">IMPLEMENTATION</h5>
              <p className="card-text">
                After fixing the SEO/SMM/SEM startegy by doing competitor
                research and other stuff. We start implementing those on your
                website.
              </p>
            </div>
          </div>
        </div>
        <div className="home-seo-btn-container bg-primary p-5">
          <li>
            <Link to="#" className="btn bg-warning btn-lg   rounded-pill">
              View more
            </Link>
          </li>
          <li>
            <Link to="#" className="btn bg-warning btn-lg  rounded-pill">
              Get started
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default HomeSeo;
