
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AdoptFormPage from './pages/adoptFormPage';
import PetListPage from './pages/petListPage';
import AuthPage from './pages/authPage';
import AdopterDashboard from './pages/adopterDashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminDashboard from './pages/adminDashboard';


const API_URL = "http://localhost:5001/api/";
function App() {

    const [pets, setPets] = useState([]); // State to store pets
    useEffect(() => {
      const fetchPets = async () => {
        try {
          const response = await axios.get(API_URL);
          setPets(response.data); // Update state with fetched pets
        } catch (err) {
          console.error("Error fetching pets:", err);
        }
      };
      fetchPets();
    }, []);

  return (
      <div className="App">
        
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/adoption-form" element={<AdoptFormPage />} />
              <Route path='/pet-listings' element={<PetListPage pets={pets}/>}/>
              <Route path="/login" element={<AuthPage />} />
              <Route path="/user/dashboard" element={<AdopterDashboard />} />
              <Route path='/admin/dashboard' element={<AdminDashboard pets={pets}/>}/>
          </Routes>
      </div>
  );
}

export default App;
