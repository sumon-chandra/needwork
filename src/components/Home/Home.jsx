import React from 'react';
import HomeAbout from './HomeAbout';
import HomePageServices from './HomePageServices';
// import HomePricingTable from './HomePricingTable';
import HomeSeo from './HomeSeo';
import HomeTeams from './HomeTeams';
import OurClient from './OurClient';
import ShortcutLinks from './ShortcutLinks';
import Slider from './Slider';
import Subscribe from './Subscribe';
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
            {/* <HomePricingTable /> */}
            <HomeTeams />
            <OurClient />
            <Subscribe />
        </div>
    );
};

export default Home;