import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../img/logo/logo02.png"
import "./Footer.css"

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
                  <p className="mb-4 mt-4">Shahabad Markanda, 136135, <br /> India</p>
                  <p>
                    <strong>Phone:</strong> +91 8558020904
                  </p>
                  <p>
                    <strong>Email:</strong> markuptag20@gmail.com
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
                    <Link to="#">Web Design</Link>
                  </li>
                  <li>
                    <i className="fas fa-check"></i>{" "}
                    <Link to="#">Web Development</Link>
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
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>

                <div className="social-links mt-3">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
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
