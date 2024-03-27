const { gql } = require('apollo-server-express');

const visitSchema = gql`
  type Visit {
    id: ID!
    userId: ID!
    bodyTemperature: Float!
    heartRate: Int!
    bloodPressure: String!
    respiratoryRate: Int!
    created: String!
  }

  extend type Query {
    getVisit(id: ID!): Visit
    getVisits(userId: ID!): [Visit]
  }

  extend type Mutation {
    recordVisit(userId: ID!, bodyTemperature: Float!, heartRate: Int!, bloodPressure: String!, respiratoryRate: Int!): Visit
  }
`;

module.exports = visitSchema;
