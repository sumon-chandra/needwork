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
          <Link to="/home" className="page-head-nav pe-3">
            Back to Home <i class="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div class="section-title">
            <h2 className="text-center service-title py-5">Let's talk</h2>
            <p class="col-md-8 offset-md-2">
              
            </p>
          </div>
      <div class="container-fluid">
        <div class="row py-5">
          <div class="col-sm-6">
            <div className="">
              <h3 class="text-white fs-1">Get a quote</h3>
              <p class="text-white">
                Fill up the form and our Team will get back to you within in 24
                hours
              </p>
            </div>
            <div class="links" id="bordering">
              
              <a href="#" class="btn rounded text-white pe-3">
                <i class="fa fa-phone icon  pe-3"></i>01722077442
              </a>
              <a href="#" class="btn rounded text-white pe-3">
                <i class="fa fa-envelope icon  pe-3"></i>
                needworkservices@gmail.com
              </a>
              <a href="#" class="btn rounded text-white pe-3 text-italic">
                <i class="fa fa-map-marker icon  pe-3"></i>Mirpur 102
                Dhaka, Bangladesh
              </a>
            </div>
            <div className="social-links py-5">
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
          <div class="col-sm-6 pad">
            <form ref={form} class="rounded msg-form" onSubmit={sendEmail}>
              <div class="form-group">
                
                <label for="name" class="h6">
                  Your Name
                </label>
                <div class="input-group border rounded">
                  <div class="input-group-addon px-2 pt-1">
                    <p class="fas fa-user text-dark"></p>
                  </div>
                  <input type="text" name="user-name" class="form-control border-0" />
                </div>
              </div>
              <div class="form-group">
                
                <label for="name" class="h6">
                  Phone Number
                </label>
                <div class="input-group border rounded">
                  <div class="input-group-addon px-2 pt-1">
                    <p class="fas fa-phone-alt text-dark"></p>
                  </div>
                  <input type="text" name="phone-number" class="form-control border-0" />
                </div>
              </div>
              <div class="form-group">
                
                <label for="name" class="h6">
                  Website Link
                </label>
                <div class="input-group border rounded">
                  <div class="input-group-addon px-2 pt-1">
                    <p class="fas fa-globe text-dark"></p>
                  </div>
                  <input name="website-url" type="text" class="form-control border-0" />
                </div>
              </div>
              <div class="form-group">
                
                <label for="name" class="h6">
                  Email
                </label>
                <div class="input-group border rounded">
                  <div class="input-group-addon px-2 pt-1">
                    
                    <i class="fa fa-envelope"></i>
                  </div>
                  <input type="text" name="user-email" class="form-control border-0" />
                </div>
              </div>
              <div class="form-group">
                
                <label for="msg" class="h6">
                  Message
                </label>
                <textarea
                  name="message"
                  id="msgus"
                  cols="10"
                  rows="5"
                  class="form-control bg-light"
                  placeholder="Tell us, how can we help you?"
                ></textarea>
              </div>
              <div class="form-group d-flex justify-content-start py-4">
                
                <input
                  type="submit"
                  class="btn btn-dark rounded-pill text-white"
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
