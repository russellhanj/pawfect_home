import React from 'react';
import Header from '../components/header';
import AboutUs from '../components/aboutUs';
import Footer from '../components/footer';
import PetList from '../components/petList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const PetListPage = ({pets}) => {


    const [filteredPets, setFilteredPets] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const type = params.get('type') || '';
        const queryLocation = params.get('location') || '';

        const filtered = pets.filter(pet => {
            const matchesType = type ? pet.type.toLowerCase().includes(type.toLowerCase()) : true;
            const matchesLocation = queryLocation
                ? pet.location.toLowerCase().includes(queryLocation.toLowerCase())
                : true;
            return matchesType && matchesLocation;
        });

        setFilteredPets(filtered);
    }, [location]);

    return (
    <div className="container mt-4">
        <Header/>  
        <div className="container mt-4">
            <h1 className="text-center mb-4">Our Lovely Pets</h1>
            <PetList pets={filteredPets} />
        </div>

        <AboutUs />
        <Footer />

    </div>
    
    


    );
}
 
export default PetListPage;