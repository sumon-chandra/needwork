import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePricingTable = () => {
    useEffect( () => {
        Aos.init({duration:500})
    },[])
  return (
    <div>
      <div className="home-pricing-table-container container">
        <div data-aos="fade-up" className="head-title text-center">
          <h1> Choose a plan</h1>
        </div>
        <div className="container">
    <div className="row">
        <div data-aos="fade-up" className="col-md-12 col-lg-4 col-sm-6  animate__fadeInRight">
            <div className="pricingTable">
                <div className="pricing_heading">
                    <h3 className="title">Pricing Plan</h3>
                    <span className="value">
                        $12.99
                        <span className="month">per month</span>
                    </span>
                </div>
                <div className="content">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    <div className="link">
                        <Link to="#" href="#">sign up</Link>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" className="col-md-12 col-lg-4 col-sm-6 animate__fadeInRight">
            <div className="pricingTable">
                <div className="pricing_heading">
                    <h3 className="title">Pricing Plan</h3>
                    <span className="value">
                        $22.99
                        <span className="month">per month</span>
                    </span>
                </div>
                <div className="content">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    <div className="link">
                        <Link to="#" href="#">sign up</Link>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-up" className="col-md-12 col-lg-4 col-sm-6 animate__fadeInRight">
            <div className="pricingTable">
                <div className="pricing_heading">
                    <h3 className="title">Pricing Plan</h3>
                    <span className="value">
                        $22.99
                        <span className="month">per month</span>
                    </span>
                </div>
                <div className="content">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                    <div className="link">
                        <Link to="#" href="#">sign up</Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</div>
      </div>
    </div>
  );
};

export default HomePricingTable;
