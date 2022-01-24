import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../img/logo/logo02.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="footer-top ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="address">
                  <img src={footerImg} className="w-75" alt="" />
                  <p className="mb-4 mt-4">Mirpur 1, Dhaka</p>
                  <p>
                    <strong>Phone:</strong> 01722077442
                  </p>
                  <p>
                    <strong>Email:</strong> needworkservices@gmail.com
                  </p>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 footer-menus">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i> <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/teams">Teams</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/contract">Contract</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-6 footer-menus">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/services">Web Design & Development</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <Link to="/services">SEO</Link>
                  </li>

                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/services">Digital Marketing</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="/services">Graphic Design</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-sm-6 newsletter">
                <h4> Let's Jump</h4>
                <p className="text-secondary">
                  “Waiting for perfect time and opportunity. It comes never -
                  start now.” <br /> - <span className="highlight py-2">Amit Ray</span>
                </p>
                <form action="" method="post">
                  
                  <Link to="/contract" className="btn btn-lg w-100">Contract us</Link>
                </form>

                <div className="social-links mt-3">
                  <a target="_blanck" href="https://www.facebook.com/needworkservices">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blanck" href="https://www.linkedin.com/company/need-work">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a target="_blanck" href="https://www.youtube.com/channel/UCpvPUGM66Y5r22RQqkxOY2Q">
                    <i className="fab fa-youtube"></i>
                  </a>
            
                </div>
                {/* <div className="social-links social mt-3">
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100041872263404">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/Sumon__Chandra">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/sumon-chandra-shil-2a79a1216/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/sumon-chandra-shil-2a79a1216/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="text-center mb-2">
                  &copy; Copyright <strong>needwork</strong>. All Rights
                  Reserved
                </p>
                <p className="text-center mb-0">
                  Created by{" "}
                  <Link to="https://www.needwork.xyz/">needwork.xyz</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
