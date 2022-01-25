import React from "react";
import sumon from "../../img/team/sumon.png";
import sohan from "../../img/team/sohan.png";
import rakib from "../../img/team/rakib.png";
import sabbir from "../../img/team/sabbir.png";
import { Link } from "react-router-dom";

const HomeTeams = () => {
  return (
    <div>
      <div className="container home-team-container mx-auto mt-5 col-md-10 mt-100">
        <div data-aos="fade-up" className="head-title text-center">
        <h1>Our Expert Team</h1>
      </div>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          <div className="col team-card-container">
            <div className="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={sumon} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Sumon Chandra</h5>
                <p className="team-post">Chief Technology Officer</p>
                <p className="card-text">Web Designer & Developer</p>
                <div className="social-links social mt-3">
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100041872263404">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/Sumon__Chandra">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/sumon-chandra-shil-2a79a1216/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col team-card-container">
            <div className="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={rakib} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Rakib Hossain</h5>
                <p className="team-post">Business Development Officer</p>
                <p className="card-text text-center">Digital Marketer & SEO Specialist</p>
                <div className="social-links social mt-3">
                  <a target="_blank" href="https://www.facebook.com/rakib44550">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/rakibh4455?fbclid=IwAR0S4i6DOAMzOjut8cNBJPEdEapAaTW1qFJeJhUtLoc_w22pc2Nvtx061P4">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/md-rakib-hossain-1366b1178/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col team-card-container">
            <div className="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={sohan} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Sohan Ali</h5>
                <p className="team-post">Management Officer</p>
                <p className="card-text text-center">SEO Specialist</p>
                <div className="social-links social mt-3">
                  <a target="_blank" href="https://www.facebook.com/sohanali420">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/sohanali420?s=07&fbclid=IwAR1xoIntdvOn01jblHBectXSn2Tp3zoduuWxkDgBoNMM4itsl_7lRd2LjRw">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/advance-seo-experts-bangladesh/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col team-card-container">
            <div className="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={sabbir} className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">Sabbir Hossain Hridoy</h5>
                <p className="team-post">Co-Management Officer</p>
                <p className="card-text text-center">Graphic Designer</p>
                <div className="social-links social mt-3">
                  <a target="_blank" href="https://www.facebook.com/md.sabbi.92">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTeams;
