'use strict';

const GraphQL = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = GraphQL;

const UserType = new GraphQL.GraphQLObjectType({
  name: 'User',
  description: 'User type, for fetching users from api',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    isActive: {
      type: GraphQLBoolean
    },
    age: {
      type: GraphQLInt
    }
  })
});

module.exports = UserType;