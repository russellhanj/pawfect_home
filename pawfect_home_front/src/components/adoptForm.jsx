// AdoptForm.jsx
import React, { useState } from 'react';

const AdoptForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    petChoice: '',
    experience: '',
    householdInfo: '',
    adoptionReason: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Add any actions needed upon form submission
  };

  return (
    <form onSubmit={handleSubmit} className="adopt-form">
      {/* Full Name */}
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

      {/* Phone */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      {/* Address */}
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <textarea
          id="address"
          name="address"
          className="form-control"
          value={formData.address}
          onChange={handleChange}
          rows="2"
          required
        />
      </div>

      {/* Pet Choice */}
      <div className="mb-3">
        <label htmlFor="petChoice" className="form-label">Pet Choice</label>
        <select
          id="petChoice"
          name="petChoice"
          className="form-select"
          value={formData.petChoice}
          onChange={handleChange}
          required
        >
          <option value="">Select a Pet</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Experience with Pets */}
      <div className="mb-3">
        <label htmlFor="experience" className="form-label">Experience with Pets</label>
        <select
          id="experience"
          name="experience"
          className="form-select"
          value={formData.experience}
          onChange={handleChange}
          required
        >
          <option value="">Select Experience Level</option>
          <option value="None">None</option>
          <option value="Beginner">Beginner</option>
          <option value="Experienced">Experienced</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      {/* Household Information */}
      <div className="mb-3">
        <label htmlFor="householdInfo" className="form-label">Household Information</label>
        <textarea
          id="householdInfo"
          name="householdInfo"
          className="form-control"
          value={formData.householdInfo}
          onChange={handleChange}
          rows="3"
          placeholder="Describe your household environment"
          required
        />
      </div>

      {/* Reason for Adoption */}
      <div className="mb-3">
        <label htmlFor="adoptionReason" className="form-label">Why Do You Want to Adopt?</label>
        <textarea
          id="adoptionReason"
          name="adoptionReason"
          className="form-control"
          value={formData.adoptionReason}
          onChange={handleChange}
          rows="3"
          placeholder="Explain your reason for adopting a pet"
          required
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">Submit Adoption Form</button>
    </form>
  );
};

export default AdoptForm;
