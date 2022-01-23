import React from "react";
import "./Teams.css";
import sumon from "../../img/team/sumon.png";
import sohan from "../../img/team/sohan.png";
import rakib from "../../img/team/rakib.png";
import sabbir from "../../img/team/sabbir.png";
import { Link } from "react-router-dom";
import Subscribe from "../Home/Subscribe"
const Teams = () => {
  return (
    <div className="page-head">
      <div className="d-flex align-items-center justify-content-center about-top-container">
        <div className=" about-top">
          <h2 className="fs-1">Meet Our Team Members</h2>
          <Link to="/home" className="page-head-nav pe-3">
            Back to Home <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 container mx-auto py-5">
        <div class="col team-container">
          <div class="card member">
            <img src={sumon} class="card-img-top" alt="..." />
            <div class="card-body tem-desc">
              <h5 class="card-title">Sumon Chandra</h5>
              <h6 className="team-post">Chief Technology Officer</h6>
              <p className="card-text h-auto fs-6">Web Designer & Developer</p>
              
              <div className="social-links social mt-3">
                  <Link to="https://www.facebook.com/profile.php?id=100041872263404">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="https://twitter.com/Sumon__Chandra">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/in/sumon-chandra-shil-2a79a1216/">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  
                  
                </div>
            </div>
          </div>
        </div>
        <div class="col team-container">
          <div class="card member">
            <img src={rakib} class="card-img-top" alt="..." />
            <div class="card-body tem-desc">
              <h5 class="card-title">Rakib Hossain</h5>
              <h6 className="team-post">Business Development Officer</h6>
              <p className="card-text h-auto fs-6">Digital Marketing & SEO specialist</p>
              
              <div className="social-links social mt-3">
                  <Link to="https://www.facebook.com/needworkservices">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/need-work">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  
                  
                </div>
            </div>
          </div>
        </div>
        <div class="col team-container">
          <div class="card member">
            <img src={sohan} class="card-img-top" alt="..." />
            <div class="card-body w-100 tem-desc">
              <h5 class="card-title">Sohan Ali</h5>
              <h6 className="team-post">Management Officer</h6>
              <p className="card-text h-auto fs-6">SEO Specialist</p>
              <div className="social-links social mt-3">
                  <Link to="https://www.facebook.com/needworkservices">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/need-work">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  
                </div>
            </div>
          </div>
        </div>
        <div class="col team-container">
          <div class="card member">
            <img src={sabbir} class="card-img-top" alt="..." />
            <div class="card-body tem-desc">
              <h5 class="card-title">Sabbir Hossain Hridoy </h5>
              <h6 className="team-post">Co-Management Officer</h6>
              <p className="card-text h-auto fs-6">Graphic Designer,</p>
              
              <div className="social-links social mt-3">
                  <Link to="https://www.facebook.com/needworkservices">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/need-work">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Teams;
