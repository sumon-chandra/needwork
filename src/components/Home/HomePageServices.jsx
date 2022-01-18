import React from "react";
import { Link } from "react-router-dom";
import graphic01 from "../../img/service-icon/graphic-designer.png"
import "./Home.css"

const HomePageServices = () => {
  return (
    <div className="container">
        <div className="head-title text-center">
            <h1> Our Services</h1>
        </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        <div className="col">
          <div className="card border-0">
            <img src={graphic01} className="card-img-top home-service-img" alt="" />
            <div className="card-body">
              <h5 className="card-title fs-3  fw-normal font-normal pb-3">Digital marketing</h5>
              <p className="card-text">
                This is a longer card p-3 with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe dignissimos sunt, iure sint ipsa autem maiores quibusdam repellat cum voluptates unde, at aliquam esse beatae soluta aspernatur possimus quisquam obcaecati totam minus voluptatum ad facere quis? Non, exercitationem alias.
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">View more</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src={graphic01} className="card-img-top home-service-img" alt="" />
            <div className="card-body">
              <h5 className="card-title fs-3  fw-normal font-normal pb-3">Search Engine Optimisation</h5>
              <p className="card-text">
                This is a longer card p-3 with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe dignissimos sunt, iure sint ipsa autem maiores quibusdam repellat cum voluptates unde, at aliquam esse beatae soluta aspernatur possimus quisquam obcaecati totam minus voluptatum ad facere quis? Non, exercitationem alias.
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">View more</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src={graphic01} className="card-img-top home-service-img" alt="" />
            <div className="card-body">
              <h5 className="card-title fs-3  fw-normal font-normal pb-3">Web Design & Development</h5>
              <p className="card-text">
                This is a longer card p-3 with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe dignissimos sunt, iure sint ipsa autem maiores quibusdam repellat cum voluptates unde, at aliquam esse beatae soluta aspernatur possimus quisquam obcaecati totam minus voluptatum ad facere quis? Non, exercitationem alias.
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">View more</Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-0">
            <img src={graphic01} className="card-img-top home-service-img" alt="" />
            <div className="card-body">
              <h5 className="card-title fs-3  fw-normal font-normal pb-3">Graphic Design</h5>
              <p className="card-text">
                This is a longer card p-3 with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis saepe dignissimos sunt, iure sint ipsa autem maiores quibusdam repellat cum voluptates unde, at aliquam esse beatae soluta aspernatur possimus quisquam obcaecati totam minus voluptatum ad facere quis? Non, exercitationem alias.
              </p>
              <Link to="#" className="btn bg-dark text-white btn-sm">View more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageServices;
