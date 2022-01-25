import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Contract.css"

const Contract = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_wafwkgv';
    const templateID = 'template_dvgw52r';
    const userId = 'user_E4YQZfabUbW66EvBPNHds'
 
    emailjs.sendForm(serviceID, templateID, form.current, userId)
      .then(() => {
        
        alert('Sent!');
      }, (err) => {
       
        alert(JSON.stringify(err));
      });
  };
  
  return (
    <div className="page-head">
      <div className="d-flex align-items-center justify-content-center about-top-container">
        <div className=" about-top">
          <h2 className="fs-1">Contract Us</h2>
          <Link to="/" className="page-head-nav pe-3">
            Back to Home <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="section-title">
            <h2 className="text-center service-title py-5">Let's talk</h2>
            <p className="col-md-8 offset-md-2">
              
            </p>
          </div>
      <div className=" contract-container">
        <div className="row py-5 mx-auto container-lg">
          <div className="col-sm-6">
            <div className="">
              <h3 className="text-white fs-1">Get a quote</h3>
              <p className="text-white">
                Fill up the form and our Team will get back to you within in 24
                hours
              </p>
            </div>
            <div className="links" id="bordering">
              
              <a href="#" className="btn rounded text-white pe-3">
                <i className="fa fa-phone icon  pe-3"></i>01722077442
              </a>
              <a href="#" className="btn rounded text-white">
                <i className="fa fa-envelope icon  pe-3"></i>
                needworkservices@gmail.com
              </a>
              <a href="#" className="btn rounded text-white pe-3 text-italic">
                <i className="fa fa-map-marker icon  pe-3"></i>Mirpur 1
                Dhaka, Bangladesh
              </a>
            </div>
            <div className="social-links py-5">
                  <a target="_blank" href="https://www.facebook.com/needworkservices">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/company/need-work">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a target="_blank" href="https://www.youtube.com/channel/UCpvPUGM66Y5r22RQqkxOY2Q">
                    <i className="fab fa-youtube"></i>
                  </a>
                  
                </div>
          </div>
          <div className="col-sm-6 pad">
            <form ref={form} className="rounded msg-form" onSubmit={sendEmail}>
              <div className="form-group">
                
                <label htmlFor="name" className="h6">
                  Your Name
                </label>
                <div className="input-group border rounded">
                  <div className="input-group-addon px-2 pt-1">
                    <p className="fas fa-user text-dark"></p>
                  </div>
                  <input type="text" name="user-name" className="form-control border-0" />
                </div>
              </div>
              <div className="form-group">
                
                <label htmlFor="name" className="h6">
                  Phone Number
                </label>
                <div className="input-group border rounded">
                  <div className="input-group-addon px-2 pt-1">
                    <p className="fas fa-phone-alt text-dark"></p>
                  </div>
                  <input type="text" name="phone-number" className="form-control border-0" />
                </div>
              </div>
              <div className="form-group">
                
                <label htmlFor="name" className="h6">
                  Website Link
                </label>
                <div className="input-group border rounded">
                  <div className="input-group-addon px-2 pt-1">
                    <p className="fas fa-globe text-dark"></p>
                  </div>
                  <input name="website-url" type="text" className="form-control border-0" />
                </div>
              </div>
              <div className="form-group">
                
                <label htmlFor="name" className="h6">
                  Email
                </label>
                <div className="input-group border rounded">
                  <div className="input-group-addon px-2 pt-1">
                    
                    <i className="fa fa-envelope"></i>
                  </div>
                  <input type="text" name="user-email" className="form-control border-0" />
                </div>
              </div>
              <div className="form-group">
                
                <label htmlFor="msg" className="h6">
                  Message
                </label>
                <textarea
                  name="message"
                  id="msgus"
                  cols="10"
                  rows="5"
                  className="form-control bg-light"
                  placeholder="Tell us, how can we help you?"
                ></textarea>
              </div>
              <div className="form-group d-flex justify-content-start py-4">
                
                <input
                  type="submit"
                  className="btn btn-dark rounded-pill px-5 text-white"
                  value="Send message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
