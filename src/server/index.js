const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema');
const resolvers = require('./resolvers')

const LaunchAPI = require('./dataSources/launchApi')

const server = new ApolloServer({
     typeDefs,
     resolvers,
     dataSources: () => ({
        launchAPI: new LaunchAPI(),
     })
});

const app = express();
server.applyMiddleware({ app });

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);