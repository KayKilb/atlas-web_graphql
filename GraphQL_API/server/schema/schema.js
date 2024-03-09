// server/schema/schema.js

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

// TaskType definition
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

// Root Query definition
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        // Implement your code to fetch data from the database based on the provided id
        // For now, let's just return a placeholder task
        const dummyTask = {
          id: '1',
          title: 'Sample Task',
          weight: 5,
          description: 'This is a sample task description.',
        };
        return dummyTask;
      },
    },
  },
});

// Export the GraphQLSchema
module.exports = new GraphQLSchema({
  query: RootQueryType,
});
