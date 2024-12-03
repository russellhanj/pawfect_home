import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';
import DogSlideshow from '../components/petSlideShow';
import SearchBar from '../components/searchBar';


const HomePage = () => {
    return (
        <div className='container mt-4'>
            <Header />
            <div className='container mt-4'>
            <h1>All these pals have been adopted this year! </h1>
            <DogSlideshow />
            <h1>Become part of the change and look for your perfect furred friend!
            </h1>
            </div>
            <div>
            <SearchBar/>
            </div>
            
            <AboutUs />
            <Footer />
        </div>
    );
}

export default HomePage;
