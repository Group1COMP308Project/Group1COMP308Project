import React, { useState } from 'react';
import axios from 'axios';

function AuthendicationMicroFrondend() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null);

  const handleLogin = async (role) => {
    try {
      const response = await axios.post(`http://localhost:3000/auth/login/${role}`, {
        username: 'your_username', // Replace with actual username input value
        password: 'your_password', // Replace with actual password input value
      });
      setUser(response.data.user);
      setRole(role);
      setLoggedIn(true);
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleRegister = async (role) => {
    try {
      // Add registration logic here
      console.log(`Redirecting to registration form for ${role}`);
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    setRole(null);
  };


  return (
    <div className="AuthendicationMicroFrondend">
      {!loggedIn ? (
        <div>
 <div className="mt-5">
        <h1>Welcome to our Nurse-Patient Vital Signs Application</h1>
        <p className="mt-3">
          This application helps nurse practitioners monitor patients' vital signs during their
          recovery period after leaving the hospital. Patients can also use it to track their daily
          activities and communicate with their healthcare providers.
        </p>
        <p className="mt-3">
          Please login using your credentials to access the dashboard and start using the features
          of the application.
        </p>
        </div>

          <h2>Login</h2>
          <div>
            <h3>Nurse Login</h3>
            <form onSubmit={() => handleLogin('nurse')}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
              <button type="button" onClick={() => handleRegister('nurse')}>Register as Nurse</button>
              {error && <p>{error}</p>}
            </form>
          </div>
          <div>
            <h3>Patient Login</h3>
            <form onSubmit={() => handleLogin('patient')}>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
              <button type="button" onClick={() => handleRegister('patient')}>Register as Patient</button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Role: {role}</p>
          {/* Display user-related data here */}
          <button onClick={handleLogout}>Logout</button>
<div>
          <Link to="/nurse-dashboard">Go to Nurse Dashboard</Link>
          <Link to="/patient-dashboard">Go to Patient Dashboard</Link>
        </div>
      </div>  
      )}
    </div>
  );
}

export default AuthendicationMicroFrondend;