'use strict';

const GraphQL = require('graphql');
const { GraphQLList } = GraphQL;
const UserType = require('../types/User');
const UserResolver = require('../resolvers/User');

module.exports = {
  index() {
    return {
      type: new GraphQLList(UserType),
      description: 'Returns list of users',
      resolve(parent, args, context, info) {
        return UserResolver.index();
      }
    }
  }
}