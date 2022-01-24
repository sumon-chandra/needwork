import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import likePeople from "../../img/sticker/like-men.png";
import laptopSticker from "../../img/sticker/laptop.png";
import sentMail from "../../img/sticker/send-mail.png";
import sent from "../../img/sticker/send.png"
const Subscribe = () => {
  useEffect( () => {
    Aos.init({duration:500})
  },[])
  return (
    <div className="subscribe-section">
      <div className="subscribe-container container">
        <div className="empty">
          <img data-aos="fade-up" className="like-men" src={likePeople} alt="" />
          <img data-aos="fade-up" src={sent} alt="" className="sentMail-sticker" />
          <img data-aos="fade-up-right" src={sentMail} alt="" className="sent-sticker" />
        </div>
        <form className="form-section">
          <div className="mb-3" >
            <label for="exampleInputEmail1" className="form-label fs-4">
              Let's jump right in....
            </label>
            <input
              type="email"
              className="form-control rounded-pill"
              id="exampleInputText"
              aria-describedby="emailHelp"
              placeholder="Write your email...."
              required
            />
          </div>
          <Link to="/contract" type="submit" className="btn btn-dark rounded-pill subscribe-btn">
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
