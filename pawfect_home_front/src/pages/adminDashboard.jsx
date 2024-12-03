import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';


const AdminDashboard = ({pets}) => {

    const [petsData, setPets] = useState([]);
    const [newPet, setNewPet] = useState({picture:'', name: '', age:'', location:'', breed:'', gender:'', type:''});
    const [showModal, setShowModal] = useState(false);
    const [selectedPet, setSelectedPet] = useState({});
    const [updatedPet, setUpdatedPet] = useState({});
    

    useEffect(() => {
        setPets(pets);
    }, [pets]);


    //Add pet
    const handleAddPet = () => {
        if (newPet.name && newPet.age && newPet.breed && newPet.gender && newPet.location && newPet.type) {
          const newPetEntry = { ...newPet, petId: Date.now(), picture: "pet_placeholder.jpg" };
          setPets([...petsData, newPetEntry]);
          setNewPet({ picture: "", name: "", age: "", location: "", breed: "", gender: "", type: "" });

          axios.post("http://localhost:5001/api/add", newPetEntry);
          alert("Pet has been added!")
  
        } else {
          alert('Please fill out all fields!');
        }
      };
      
    //Delete pet
    const handleDeletePet = (id) => {
      if (window.confirm("Are you sure you want to delete this pet?")) {
        setPets(petsData.filter((pet) => pet.petId !== id));
        axios.delete(`http://localhost:5001/api/delete/${id}`);
      }
    };
    
    // Edit a pet
    
      const handleClose = () => setShowModal(false);
      const handleShow = (pet) => {
        setSelectedPet(pet);
        setUpdatedPet(pet); // Initialize modal inputs with current pet details
        setShowModal(true);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPet({ ...updatedPet, [name]: value });
      };
    
      const handleSaveChanges = () => {
        setPets(
          petsData.map((pet) =>
            pet._id === selectedPet.petId ? { ...pet, ...updatedPet } : pet
          )
        );
        handleClose();

        axios.put(`http://localhost:5001/api/edit/${selectedPet.petId}`, updatedPet)
        .then(response=>{
          alert(`${selectedPet.name} profile has been updated`);
        })
        .catch(err =>{
          console.log(`something went wrong: ${err}`);
          alert("Something went wrong, please try again.")
        })
      };

    return (
    <div className='container mt-4'>
      <Header />

      <div className='container mt-4'>
        <h1 className="text-center mb-4">Admin Dashboard</h1>

        <div className="row d-flex">
        {/* Pet List Section */}
          <div className="col-md-8">
            <h2>Pet List</h2>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Breed</th>
                  <th>Location</th>
                  <th>Gender</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {petsData.map((pet) => (
                  <tr key={pet.petId}>
                    <td>
                      <img
                        src={pet.picture ? `/images/${pet.picture}` : 'https://via.placeholder.com/50'}
                        alt={pet.name || 'Unnamed Pet'}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>{pet.name}</td>
                    <td>{pet.age}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.location}</td>
                    <td>{pet.gender}</td>
                    <td>{pet.type}</td>
                    <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleShow(pet)}
                      >
                        Edit
                      </Button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeletePet(pet.petId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

      {/* Add New Pet Section */}
      <div className="col-md-4">
            <h2>Add a New Pet</h2>
            <div className="card p-3">
              <form>
                <div className="mb-3">
                  <label htmlFor="petName" className="form-label">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="petName"
                    value={newPet.name}
                    onChange={(e) => setNewPet({ ...newPet, name: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="petAge" className="form-label">
                    Pet Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="petAge"
                    value={newPet.age}
                    onChange={(e) => setNewPet({ ...newPet, age: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editPetLocation" className="form-label">
                    Location
                  </label>
                  <select
                    className="form-control"
                    id="editPetLocation"
                    value={newPet.location}
                    onChange={(e) => setNewPet({ ...newPet, location: e.target.value })}
                  >
                    <option value="">Select location</option>  {/* Empty option for default selection */}
                    <option value="Vancouver, BC">Vancouver, BC</option>
                    <option value="Seattle, WA">Seattle, WA</option>
                    <option value="Kelowna, BC">Kelowna, BC</option>
                    <option value="Langley, BC">Langley, BC</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="petBreed" className="form-label">
                    Pet Breed
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="petBreed"
                    value={newPet.breed}
                    onChange={(e) => setNewPet({ ...newPet, breed: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="editPetType" className="form-label">
                    Type
                  </label>
                  <select
                    className="form-control"
                    id="editPetType"
                    value={newPet.type}
                    onChange={(e) => setNewPet({ ...newPet, type: e.target.value })}
                  >
                    <option value="">Select Type</option>  {/* Empty option for default selection */}
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="editPetGender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-control"
                    id="editPetGender"
                    value={newPet.gender}
                    onChange={(e) => setNewPet({ ...newPet, gender: e.target.value })}
                  >
                    <option value="">Select Gender</option>  {/* Empty option for default selection */}
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
                {/* <div class="mb-3">
                <label for="petPicture" class="form-label">Pet Picture</label>
                <input type="file" class="form-control" id="petPicture" />
              </div> */}
                <button type="button" className="btn btn-success w-100" onClick={handleAddPet}>
                  Add Pet
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Pet Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Pet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formPicture">
              <Form.Label>Picture URL</Form.Label>
              <Form.Control
                type="text"
                name="picture"
                value={updatedPet.picture || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={updatedPet.name || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={updatedPet.age || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                type="text"
                name="breed"
                value={updatedPet.breed || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Select
                name="location"
                value={updatedPet.location || ''}
                onChange={handleInputChange}
              >
                <option value="">Select Location</option>
                <option value="Vancouver, BC">Vancouver, BC</option>
                <option value="Langley, BC">Langley, BC</option>
                <option value="Kelowna, BC">Kelowna, BC</option>
                <option value="Seattle, WA">Seattle, WA</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="gender"
                value={updatedPet.gender || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={updatedPet.type || ''}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}
 
export default AdminDashboard;