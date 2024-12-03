import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import AboutUs from '../components/aboutUs';
import Footer from '../components/footer';


const AdopterDashboard = ({petsData}) => {
  // State for saved pets
  const [savedPets, setSavedPets] = useState([]);

  useEffect(() => {
    // Mock fetching data from Mongo
    setSavedPets(petsData); // Load the pets data
  }, []);

  const user = {
    name: "John Doe",
    applications: [
      { id: 1, petName: "Bella", type: "Dog", status: "Pending", submittedDate: "2024-11-08" },
      { id: 2, petName: "Milo", type: "Cat", status: "Approved", submittedDate: "2024-11-05" },
    ],
  };

  return (
    <div className="container mt-4">
      <Header />
      <div className="container mt-4">
        
        {/* Welcome Section */}
        <div className="welcome-banner">
          <h2>Welcome back, {user.name}!</h2>
          <p>Ready to find your next companion?</p>
        </div>

        {/* Applications Section */}
        <div className="applications-section mt-4">
          <h3>My Applications</h3>
          {user.applications.length > 0 ? (
            <ul className="list-group">
              {user.applications.map((app) => (
                <li key={app.id} className="list-group-item">
                  <strong>{app.petName}</strong> ({app.type}) - <em>{app.status}</em>
                  <br />
                  Submitted on: {app.submittedDate}
                </li>
              ))}
            </ul>
          ) : (
            <p>No applications submitted yet.</p>
          )}
        </div>

       
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AdopterDashboard;
