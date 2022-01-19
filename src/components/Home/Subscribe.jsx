import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Subscribe = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-container container">
        <div className="empty"></div>
        <form className="form-section">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fs-4">
              Email address
            </label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="exampleInputText"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <Link to="#" type="submit" className="btn btn-dark rounded-pill subscribe-btn">
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
