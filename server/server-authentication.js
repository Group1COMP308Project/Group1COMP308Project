const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const cors = require('cors')
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

const serviceEndpoints = {
  'Nurse Authentication Microservice': 'http://localhost:3003', 
};

app.post('/auth/login', async (req, res) => {
  try {
    // Assuming your nurse authentication microservice login endpoint requires username and password
    const { username, password } = req.body;
    const response = await axios.post(`${serviceEndpoints['Nurse Authentication Microservice']}/auth/login`, { username, password });
    res.send(response.data);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Authentication listening on port ${port}`);
});
