import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


function AuthenticationMicroFrontend() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null);
  //const history = useHistory();

  const handleLogin = async (role, username, password) => { // Update handleLogin to accept username and password
    try {
      const response = await axios.post(`http://localhost:3000/auth/login`, { // Simplify URL
        username,
        password,
        role, // Pass role in the request body
      });
      setUser(response.data.user);
      setRole(role);
      setLoggedIn(true);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

const handleRegister = (role) => {
  // Redirect the user to the registration page based on the selected role
  if (role === 'nurse') {
    console.log("Redirecting to nurse registration page...");
    window.location.href = '/nurse-registration'; // Assuming the route for nurse registration is '/nurse-registration'
  } else if (role === 'patient') {
    console.log("Redirecting to patient registration page...");
    window.location.href = '/patient-registration'; // Assuming the route for patient registration is '/patient-registration'
  }
};

  

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    setRole(null);
  };

  return (
    <div className="AuthenticationMicroFrontend">
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const username = e.target.elements.username.value;
                const password = e.target.elements.password.value;
                handleLogin('nurse', username, password);
              }}
            >
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
              <button type="submit">Login</button>
              <button type="button" onClick={() => handleRegister('nurse')}>Register as Nurse</button>
              {error && <p>{error}</p>}
            </form>
          </div>
          <div>
            <h3>Patient Login</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const username = e.target.elements.username.value;
                const password = e.target.elements.password.value;
                handleLogin('patient', username, password);
              }}
            >
              <input type="text" name="username" placeholder="Username" />
              <input type="password" name="password" placeholder="Password" />
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

export default AuthenticationMicroFrontend;
