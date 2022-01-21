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
                  <img src={footerImg} className="w-50" alt="" />
                  <p className="mb-4 mt-4">Mirpur, Dhaka</p>
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
                    <i className="fas fa-check"></i> <Link to="#">Home</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="#">About us</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="#">Services</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-sm-6 footer-menus">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="#">Web Design & Development</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i> <Link to="#">SEO</Link>
                  </li>

                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="#">Digital Marketing</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="#">Graphic Design</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-sm-6 newsletter">
                <h4>Our Newsletter</h4>
                <p className="text-secondary">
                  “Waiting for perfect time and opportunity. It comes never -
                  start now.” <br /> - <span className="highlight py-2">Amit Ray</span>
                </p>
                <form action="" method="post">
                  <input placeholder="Email..." type="email" name="email" />
                  <input type="submit" value="Submit" />
                </form>

                <div className="social-links mt-3">
                  <Link to="https://www.facebook.com/needworkservices">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="https://www.linkedin.com/company/need-work">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </div>
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
