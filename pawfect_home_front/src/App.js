
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AdoptFormPage from './pages/adoptFormPage';
import PetListPage from './pages/petListPage';
import AuthPage from './pages/authPage';


//Russel please install: npm install react-bootstrap bootstrap
//Russel please install: this npm install @fortawesome/fontawesome-free
//please also instal:  npm install axios


function App() {
  return (
      <div className="App">
        
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/adoption-form" element={<AdoptFormPage />} />
              <Route path='/pet-listings' element={<PetListPage/>}/>
              <Route path="/login" element={<AuthPage />} />
              {/* Add other routes as needed */}
          </Routes>
      </div>
  );
}

export default App;
