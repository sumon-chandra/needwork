import React from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

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
          <div className="carousel-item slider-1 active">
            <div className="carousel-container  container">
              <h1 className="slider-title ">Digital Marketing & <br /> SEO</h1>
              <p className="slider-desc ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias id quo nemo ullam aperiam reiciendis minus rerum animi earum?
              </p>
              <Link to="#" className="btn slider-btn btn-danger text-white">Get more</Link>
            </div>
          </div>
          <div className="carousel-item slider-2">
            <div className="carousel-container  container">
              <h1 className="slider-title ">Graphic Design</h1>
              <p className="slider-desc ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias id quo nemo ullam aperiam reiciendis minus rerum animi earum?
              </p>
              <Link to="#" className="btn slider-btn btn-danger text-white">Get more</Link>
            </div>
          </div>
          <div className="carousel-item slider-3">
            <div className="carousel-container  container">
              <h1 className="slider-title ">Web Design & <br /> Development</h1>
              <p className="slider-desc ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias id quo nemo ullam aperiam reiciendis minus rerum animi earum?
              </p>
              <Link to="#" className="btn slider-btn btn-danger text-white">Get more</Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
