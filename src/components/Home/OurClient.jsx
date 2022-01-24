import React from 'react';
import "./Home.css"
import client01 from "../../img/client/client-01.png"
import client02 from "../../img/client/client-02.svg"
import client03 from "../../img/client/client-03.png"
import client04 from "../../img/client/client-04.png"
import client05 from "../../img/client/client-05.svg"
import client06 from "../../img/client/client-06.png"

const OurClient = () => {
    return (
        <div>
            <div data-aos="fade-up" className="head-title text-center">
          <h1> Our Happy Clients</h1>
        </div>
        <section className="logo-list pb-5">
    <div className="container">
        <div className="row py-4 bg-secondary rounded">
            <div className="col-lg-2 col-md-4 col-6 ">
                <a target="_blank" href="https://www.houzz.com/" ><img src={client01} className="img-fluid" alt="Bluehost logo" /></a>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
                <a target="_blank" href="https://www.ibisworld.com/" ><img src={client02} className="img-fluid" alt="Hostgator logo" /></a>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
                <a target="_blank" href="https://www.britannica.com/" ><img src={client03} className="img-fluid" alt="Green Geeks logo" /></a>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
                <a target="_blank" href="https://www.beatsbydre.com/ca" ><img src={client04} className="img-fluid w-50" alt="WordPress logo" /></a>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
                <a target="_blank" href="https://www.nature.com/" ><img src={client05} className="img-fluid" alt="DreamHost logo" /></a>
            </div>
            <div className="col-lg-2 col-md-4 col-6 ">
                <a target="_blank" href="https://www.wholefoodsmarket.com/" ><img src={client06} className="img-fluid" alt="Hostinger logo" /></a>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default OurClient;