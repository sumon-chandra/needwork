import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";
import webSlider from "../../img/slider/web-slider.png";
import marketingSlider from "../../img/slider/marketing-slider.png";
import graphicSlider from "../../img/slider/graphic-slider.png";

const Slider = () => {
  return (
    <div>
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
          <div className="carousel-item main-carousel slider-1 active">
            <div className="carousel-container  container d-flex align-items-center justify-content-between">
              <div className="slider-text">
                <h1 className="slider-title ">
                  Digital Marketing & <br /> SEO
                </h1>
                <p className="slider-desc ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  molestias id quo nemo ullam aperiam reiciendis minus rerum
                  animi earum?
                </p>
                <Link to="#" className="btn slider-btn btn-danger text-white">
                  Get more
                </Link>
              </div>
              <div className="slider-img">
                <img src={marketingSlider} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item main-carousel slider-2">
            <div className="carousel-container  container d-flex align-items-center justify-content-between">
              <div className="slider-text">
                <h1 className="slider-title ">Graphic Designing</h1>
                <p className="slider-desc ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  molestias id quo nemo ullam aperiam reiciendis minus rerum
                  animi earum?
                </p>
                <Link to="#" className="btn slider-btn btn-danger text-white">
                  Get more
                </Link>
              </div>
              <div className="slider-img">
                <img src={graphicSlider} alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item main-carousel slider-3">
            <div className="carousel-container  container d-flex align-items-center justify-content-between">
              <div className="slider-text">
                <h1 className="slider-title ">
                  Web Design & <br /> Development
                </h1>
                <p className="slider-desc ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  molestias id quo nemo ullam aperiam reiciendis minus rerum
                  animi earum?
                </p>
                <Link to="#" className="btn slider-btn btn-danger text-white">
                  Get more
                </Link>
              </div>
              <div className="slider-img">
                <img src={webSlider} alt="" />
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
