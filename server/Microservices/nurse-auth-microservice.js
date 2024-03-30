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

// Define MongoDB schema for nurses
const nurseSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Add other nurse-specific fields if necessary
});

const Nurse = mongoose.model('Nurse', nurseSchema);

// Define JWT secret key
const secretKey = config.sessionSecret;

// Define GraphQL type definitions
const typeDefs = gql`
  type User {
    id: ID!
    userName: String!
    email: String!
  }

  type Nurse {
    id: ID!
    username: String!
  }

  type Query {
    users: [User!]!
    nurses: [Nurse!]!
  }

  type Mutation {
    signup(userName: String!, email: String!, password: String!): User
    login(email: String!, password: String!): String
    signupNurse(username: String!, password: String!): Nurse
    loginNurse(username: String!, password: String!): String
    logout: Boolean
  }
`;

// Define resolvers for GraphQL operations
const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    nurses: async () => {
      return await Nurse.find();
    },
  },
  Mutation: {
    signup: async (_, { userName, email, password }) => {
      // Signup logic for users
    },
    login: async (_, { email, password }) => {
      // Login logic for users
    },
    signupNurse: async (_, { username, password }) => {
      // Signup logic for nurses
    },
    loginNurse: async (_, { username, password }) => {
      // Login logic for nurses
    },
    logout: async () => {
      // Implement logout logic if needed
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
