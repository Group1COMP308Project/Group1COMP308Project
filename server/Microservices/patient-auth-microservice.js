const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Load environment-specific configuration
const env = process.env.NODE_ENV || 'development';
const config = require(`./env/${env}.js`);

// Initialize Express app
const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
  
  // Define MongoDB schema for users
  const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
  });

const User = mongoose.model('User', userSchema);

// Define MongoDB schema for patients
const patientSchema = new mongoose.Schema({
    username: String,
    password: String,
   
  });
  
  const Patient = mongoose.model('Patient', patientSchema);

// Define JWT secret key
const secretKey = config.sessionSecret;

// Define GraphQL type definitions
const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
  }

  type Patient {
    id: ID!
    username: String!
  }

  type Query {
    users: [User!]!
    patients: [Patient!]!
  }

  type Mutation {
    signup(userName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String
    signupPatient(username: String!, password: String!): Nurse
    loginPatient(username: String!, password: String!): String
    logout: Boolean
  }
`;

// Define resolvers for GraphQL operations
const resolvers = {
    Query: {
      users: async () => {
        return await User.find();
      },
      patients: async () => {
        return await Patient.find();
      },
    },
    Mutation: {
      signup: async (_, { userName, email, password }) => {
        // Signup logic for users
      },
      login: async (_, { email, password }) => {
        // Login logic for users
      },
      signupPatient: async (_, { username, password }) => {
        // Signup logic for patients
      },
      loginPatient: async (_, { username, password }) => {
        // Login logic for patients
      },
      logout: async () => {
       
        return true;
      },
    },
  };

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the Apollo Server and apply middleware to Express app
async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

// Call the startApolloServer function to start the server
startApolloServer().then(() => {
    // Start the Express server after the Apollo Server is started
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => {
      console.log(`Authentication Microservice listening on port ${PORT}`);
    });
  }).catch(error => {
    console.error('Error starting Apollo Server:', error);
  });
  
