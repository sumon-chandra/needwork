import Aos from 'aos';
import React, { useEffect } from 'react';

const About = () => {
    useEffect( () => {
        Aos.init()
    })
    return (
        <div className='page-head'>
            <h1>This is About Us section</h1>
            <div data-aos="fade-left">
                <h4>For the test</h4>
            </div>
        </div>
    );
};

export default About;