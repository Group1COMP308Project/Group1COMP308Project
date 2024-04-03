// PatientRegistration.jsx

import React, { useState } from 'react';
import axios from 'axios';

function PatientRegistration() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    // Add additional fields if needed
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register/patient', formData);
      // Handle successful registration, such as redirecting to login page
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        {/* Add additional input fields for other patient details */}
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default PatientRegistration;
