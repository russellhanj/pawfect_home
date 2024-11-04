
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import {
  Home,
  PetListings,
  PetDetails,
  AdoptionForm,
  UserProfile,
  AdminDashboard,
  LoginSignup
} from './components/pages.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet-listings" element={<PetListings />} />
          <Route path="/pet-details/:id" element={<PetDetails />} />
          <Route path="/adoption-form" element={<AdoptionForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<LoginSignup />} />
      </Routes>
     <HomePage/>
     
    </div>
  );
}

export default App;
