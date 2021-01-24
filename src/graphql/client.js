import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://react-todo-graphql-api-1.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
