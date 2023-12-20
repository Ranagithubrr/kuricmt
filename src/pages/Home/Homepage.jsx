import React from 'react';
import NavbarLanding from '../../components/Landing/NavbarLanding';
import MainView from '../../components/Landing/MainView';
import Teachers from '../../components/Landing/Teachers';
import Gallery from '../../components/Landing/Gallery';

const Homepage = () => {
    return (
        <div className='px-8'>
            <NavbarLanding />
            <MainView />
            <Teachers />
            <Gallery />
        </div>
    );
};

export default Homepage;