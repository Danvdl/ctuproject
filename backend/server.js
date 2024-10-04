const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schema');  // Schema definitions
const resolvers = require('./graphql/resolvers');  // Resolvers

async function startApolloServer() {
  const app = express();
  const cors = require('cors');

  app.use(cors());  // Enable CORS

  const server = new ApolloServer({
    typeDefs,  // Schema definitions
    resolvers  // Resolvers for queries and mutations
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 5000 }, () =>
    console.log(`Server ready at http://localhost:5000${server.graphqlPath}`)
  );
}

startApolloServer().catch((error) => {
  console.error('Error starting server:', error);
});
