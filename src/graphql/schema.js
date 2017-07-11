const GraphQL = require('graphql');
const PostQuery = require('./queries/Post');
const {
	GraphQLObjectType,
	GraphQLSchema,
} = GraphQL;


// lets define our root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'This is the default root query provided by our application',
	fields: {
		posts: PostQuery.index(),
	},
});

// export the schema
module.exports = new GraphQLSchema({
	query: RootQuery,
});