const { gql } = require('apollo-server-express');

const tipSchema = gql`
  type Tip {
    id: ID!
    tips: String!
    created: String!
  }

  extend type Query {
    getDailyTips: [Tip]
  }

  extend type Mutation {
    createTip(content: String!): Tip
  }
`;

module.exports = tipSchema;
