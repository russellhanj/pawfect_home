
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AdoptFormPage from './pages/adoptFormPage';
import PetListPage from './pages/petListPage';




function App() {
  return (
      <div className="App">
        
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/adoption-form" element={<AdoptFormPage />} />
              <Route path='/pet-listings' element={<PetListPage/>}/>

              {/* Add other routes as needed */}
          </Routes>
      </div>
  );
}

export default App;
