import React from 'react';
import { useState } from 'react';
import InquiryForm from './inquireForm';

//Russel please install this npm install @fortawesome/fontawesome-free

const Pet = ({pet}) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const petImage = require(`../images/${pet.picture}`);

    return (

    <>
    <div className="card text-center shadow-sm">

            <i 
                className={`fas fa-heart position-absolute top-0 end-0 m-3 ${isFavorited ? 'text-danger' : 'text-muted'}`} 
                style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                onClick={toggleFavorite}
            ></i>


        <img src={petImage} className="card-img-top rounded-circle mx-auto mt-3" alt={`${pet.name}`} style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <div className="card-body">
            <h5 className="card-title text-primary">{pet.name}</h5>
            <p className="card-text text-muted">{pet.breed}</p>
            <p className="mb-1"><strong>Age:</strong> {pet.age} years</p>
            <p className="mb-1"><strong>Gender:</strong> {pet.gender}</p>
            <p><strong>Location:</strong> {pet.location}</p>
            <button onClick={handleShow} className="btn btn-primary mt-3">Inquire</button>
        </div>
    </div> 

    <InquiryForm
                showModal={showModal}
                handleClose={handleClose}
                petId={pet.id}
    />

    </>
         


);
}
 
export default Pet;