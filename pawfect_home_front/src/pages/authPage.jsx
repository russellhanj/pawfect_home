// AuthPage.jsx
import React, { useState } from 'react';
import Header from '../components/header';
import AboutUs from '../components/aboutUs';
import Footer from '../components/footer';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup modes
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Toggle form mode between Login and Signup
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      console.log("Signing up with:", formData);
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
    }
    // Handle login or signup logic here, like API requests
  };

  return (
    <div className="container mt-4">
        <Header/>  
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        
        {/* Full Name (only for Signup) */}
        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password (only for Signup) */}
        {!isLogin && (
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          {isLogin ? 'Login' : 'Signup'}
        </button>

        {/* Toggle Button */}
        <p className="mt-3">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button type="button" onClick={toggleForm} className="btn btn-link">
            {isLogin ? 'Signup' : 'Login'}
          </button>
        </p>
      </form>
      <AboutUs />
        <Footer />
    </div>
  );
};

export default AuthPage;
