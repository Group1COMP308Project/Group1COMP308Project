const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Define service endpoints
const serviceEndpoints = {
  'Nurse Authentication Microservice': 'http://localhost:3003', 
  'Patient Authentication Microservice': 'http://localhost:3002', // Assuming the patient auth service runs on port 3004
};

// Middleware to parse JSON request body
app.use(express.json());

// Nurse login route
app.post('/auth/nurse/login', async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Call nurse authentication microservice login endpoint
    const response = await axios.post(`${serviceEndpoints['Nurse Authentication Microservice']}/auth/login`, { username, password });

    // Send response from nurse authentication microservice to client
    res.send(response.data);
  } catch (error) {
    console.error('Error logging in as nurse:', error);
    // Send error response if an error occurs
    res.status(500).send('Internal Server Error');
  }
});

// Patient login route
app.post('/auth/patient/login', async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Call patient authentication microservice login endpoint
    const response = await axios.post(`${serviceEndpoints['Patient Authentication Microservice']}/auth/login`, { username, password });

    // Send response from patient authentication microservice to client
    res.send(response.data);
  } catch (error) {
    console.error('Error logging in as patient:', error);
    // Send error response if an error occurs
    res.status(500).send('Internal Server Error');
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Authentication BFF listening on port ${port}`);
});
