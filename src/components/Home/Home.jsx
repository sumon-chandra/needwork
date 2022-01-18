import React from 'react';
import HomeAbout from './HomeAbout';
import HomePageServices from './HomePageServices';
import HomeSeo from './HomeSeo';
import ShortcutLinks from './ShortcutLinks';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <ShortcutLinks />
            <HomePageServices />
            <HomeAbout />
            <HomeSeo />
        </div>
    );
};

export default Home;