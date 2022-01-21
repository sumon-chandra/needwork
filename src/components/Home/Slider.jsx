import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import webSlider from "../../img/slider/web-slider.png";
import marketingSlider from "../../img/slider/marketing-slider.png";
import graphicSlider from "../../img/slider/graphic-slider.png";
import Aos from "aos";

const Slider = () => {
  useEffect( () => {
    Aos.init()
  })
  return (
    <div className="page-head">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item main-carousel active slider-1">
            <div className="carousel-container  container d-flex align-items-center justify-content-between">
              <div  data-aos="fade-left" className="slider-text">
                <h2 className="slider-title ">Digital Marketing & SEO</h2>
                <p className="slider-desc ">
                  be found. be heard. be effective
                </p>
                <Link to="#" className="btn slider-btn rounded-pill text-white">
                  Explore
                </Link>
              </div>
              <div className="slider-img"  data-aos="fade-left">
                <img  src={marketingSlider} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item main-carousel slider-2">
            <div className="carousel-container  container d-flex align-items-center justify-content-between">
              <div data-aos="fade-left" className="slider-text">
                <h2 className="slider-title ">Graphic Designing</h2>
                <p className="slider-desc ">
                  design is a solution to a problem, <br />art is a question to a problem
                </p>
                <Link to="#" className="btn slider-btn rounded-pill text-white">
                  Get more
                </Link>
              </div>
              <div className="slider-img"  data-aos="fade-left">
                <img  data-aos="fade-left" src={graphicSlider} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item main-carousel slider-3">
            <div className="carousel-container  container d-flex align-items-center justify-content-between">
              <div  data-aos="fade-left" className="slider-text">
                <h2 className="slider-title ">
                  Web Design & <br /> Development
                </h2>
                <p className="slider-desc ">
                  enhance your vision for batter life.
                </p>
                <Link to="#" className="btn slider-btn rounded-pill text-white">
                  Get more
                </Link>
              </div>
              <div className="slider-img"  data-aos="fade-left">
                <img  data-aos="fade-left" src={webSlider} alt="" />
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
