import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;
