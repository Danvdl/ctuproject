import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',  // Ensure this matches the backend GraphQL server URI
  }),
  cache: new InMemoryCache(),
});

export default client;
