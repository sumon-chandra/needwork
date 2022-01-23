import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../img/logo/logo02.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="navbar-container shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container nav-contain">
            <Link to="/home" className="navbar-brand">
              <img src={mainLogo} alt="" className="main-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-us" className="nav-link">
                    About Us
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/teams" className="nav-link">
                    Teams
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/blogs" className="nav-link">
                    Blogs
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/contract" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
