const { gql } = require('apollo-server-express');

const alertSchema = gql`
  type Alert {
    id: ID!
    message: String!
    pateintName: String!
  }

  extend type Query {
    getAlert: [Alert]
  }

  extend type Mutation {
    createAlert(message: String!): Alert
  }
`;

module.exports = alertSchema;
