import React from "react";
import sumon from "../../img/team/sumon.png";
import sohan from "../../img/team/sohan.png";
import rakib from "../../img/team/rakib.png";
import sabbir from "../../img/team/sabbir.png";
import { Link } from "react-router-dom";

const HomeTeams = () => {
  return (
    <div>
      <div class="container home-team-container mx-auto mt-5 col-md-10 mt-100">
        <div data-aos="fade-up" className="head-title text-center">
        <h1>Our Expert Team</h1>
      </div>
        <div class="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4">
          <div class="col team-card-container">
            <div class="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={sumon} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center fw-bold">Sumon Chandra</h5>
                <p className="team-post">Chief Technology Officer</p>
                <p class="card-text">Web Designer & Developer</p>
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
          <div class="col team-card-container">
            <div class="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={rakib} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center fw-bold">Rakib Hossain</h5>
                <p className="team-post">Business Development Officer</p>
                <p class="card-text text-center">Digital Marketer & SEO Specialist</p>
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
          <div class="col team-card-container">
            <div class="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={sohan} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center fw-bold">Sohan Ali</h5>
                <p className="team-post">Management Officer</p>
                <p class="card-text text-center">SEO Specialist</p>
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
          <div class="col team-card-container">
            <div class="card card-details d-flex flex-column justify-content-center align-items-center">
              <img src={sabbir} class="card-img-top " alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center fw-bold">Sabbir Hossain Hridoy</h5>
                <p className="team-post">Co-Management Officer</p>
                <p class="card-text text-center">Graphic Designer</p>
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
        </div>
      </div>
    </div>
  );
};

export default HomeTeams;
