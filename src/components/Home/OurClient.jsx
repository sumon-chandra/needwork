import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const OurClient = () => {
    return (
        <div>
            <div data-aos="fade-up" className="head-title text-center">
          <h1> Our Happy Clients</h1>
        </div>
        <section className="logo-list pb-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-6">
                <Link to="#" ><img src="https://www.markuptag.com/images/bluehost-logo.png" className="img-fluid" alt="Bluehost logo" /></Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <Link to="#" ><img src="https://www.markuptag.com/images/hostgator-logo.png" className="img-fluid" alt="Hostgator logo" /></Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <Link to="#" ><img src="https://www.markuptag.com/images/greengeeks-logo.png" className="img-fluid" alt="Green Geeks logo" /></Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <Link to="#" ><img src="https://www.markuptag.com/images/wordpress-logo.png" className="img-fluid" alt="WordPress logo" /></Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <Link to="#" ><img src="https://www.markuptag.com/images/dreamhost-logo.png" className="img-fluid" alt="DreamHost logo" /></Link>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
                <Link to="#" ><img src="https://www.markuptag.com/images/hostinger-logo.png" className="img-fluid" alt="Hostinger logo" /></Link>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default OurClient;