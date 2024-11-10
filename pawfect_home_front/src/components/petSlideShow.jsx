import React, { useEffect, useState } from 'react';
import axios from 'axios';


const DogSlideshow = () => {
    const [dogBreeds, setDogBreeds] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const API_KEY = process.env.REACT_APP_API_KEY;
    

    // Fetch dog images
    useEffect(() => {
    
        const fetchDogs = async () => {
            try {
                const response = await axios.get('https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=true', {
                    headers: {
                        'x-api-key': API_KEY 
                    }
                });
                console.log('Breeds ',response.data);
                setDogBreeds(response.data);
              
            } catch (error) {
                console.error('Error fetching dog breeds:', error);
            }
           
        };
        
        fetchDogs();
        

    }, []




);
    
    useEffect(() => {
        if (dogBreeds.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % dogBreeds.length);
            }, 5000); 

            return () => clearInterval(interval); 
        }
    }, [dogBreeds]);

   
    return (
        <div style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden', borderRadius: '40px' 
            , display:'flex', alignItems:'center', justifyContent:'center', backgroundColor: '#f0f0f0',
        }}>
                            
            {dogBreeds.length > 0 ? (
            

                <>
                <img
                    src={dogBreeds[currentIndex].url}
                    alt="A cute dog"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: 'inherit',
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />

                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                            color: '#fff',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            padding: '10px',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                        }}>
                            <h4 style={{ margin: 0 }}>{dogBreeds[currentIndex].breeds[0].name}</h4>
                            <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold' }}>Adopted</p>
                        </div>
                </>

            ) : (
                <p>Loading...</p>
            )}
        </div>


    );
};

export default DogSlideshow;
