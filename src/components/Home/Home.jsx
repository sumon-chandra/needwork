import React from 'react';
import HomeAbout from './HomeAbout';
import HomePageServices from './HomePageServices';
import HomeSeo from './HomeSeo';
import ShortcutLinks from './ShortcutLinks';
import Slider from './Slider';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Slider />
            <ShortcutLinks />
            <HomePageServices />
            <HomeAbout />
            <HomeSeo />
            <Testimonial />
        </div>
    );
};

export default Home;