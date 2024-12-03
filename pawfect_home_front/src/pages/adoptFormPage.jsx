// AdoptFormPage.jsx
import React from 'react';
import AdoptForm from '../components/adoptForm';
import Header from '../components/header';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';


const AdoptFormPage = () => {
  return (
    <div className="container mt-4">
        <Header />
        
        <div className='container mt-4'>
          <h2>Adopt a Pet</h2>
          <AdoptForm/>
        </div>
        
        <AboutUs />
        <Footer />
        
    </div>
  );
};

export default AdoptFormPage;
