import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';
import DogSlideshow from '../components/petSlideShow';


const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <div>
            <h1>All these pals have been adopted this year! </h1>
            <DogSlideshow />
            <h1>Become part of the change and look for your perfect furred friend</h1>
            </div>
            
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;
