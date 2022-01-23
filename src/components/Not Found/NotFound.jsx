import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../img/404/404.png"

const NotFound = () => {
    
    return (
        <div>
            <div className="not-found-img container page-head">
                <img src={img} class="img-fluid mx-auto d-block py-5" alt="" />
            </div>
            <Link to="/home" className="btn rounded-pill bg d-block mx-auto bg-danger mb-5 col-lg-3 col-sm-3 col-md-4">Go back home</Link>
        </div>
    );
};

export default NotFound;