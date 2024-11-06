import React from 'react';
import Header from '../components/header';
import AboutUs from '../components/aboutUs';
import Footer from '../components/footer';
import PetList from '../components/petList';
import pets from '../services/pets.json'


const PetListPage = () => {

    return (

    <div>
        <Header/>  
        <div className="container mt-4">
            <h1 className="text-center mb-4">Our Lovely Pets</h1>
            <PetList pets={pets} />
        </div>

        <AboutUs />
        <Footer />

    </div>
    
    


    );
}
 
export default PetListPage;