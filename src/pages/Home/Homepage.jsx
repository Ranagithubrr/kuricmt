import React from 'react';
import NavbarLanding from '../../components/Landing/NavbarLanding';
import MainView from '../../components/Landing/MainView';
import Teachers from '../../components/Landing/Teachers';
import Gallery from '../../components/Landing/Gallery';
import AboutUs from '../../components/Landing/AboutUs';
import Notices from '../../components/Landing/Notices';
import Quotes from '../../components/Landing/Quotes';
import Application from '../../components/Landing/Application';

const Homepage = () => {
    return (
        <div className='px-8'>
            <NavbarLanding />
            <MainView />
            <Teachers />
            <AboutUs />
            <Notices />
            <Gallery />
            <Quotes />
            <Application />
        </div>
    );
};

export default Homepage;