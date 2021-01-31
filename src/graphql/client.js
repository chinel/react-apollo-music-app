/* import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://react-apollo-music.herokuapp.com/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
 */

import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { gql } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://react-apollo-music.herokuapp.com/v1/graphql", // use https for secure endpoint
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: "ws://react-apollo-music.herokuapp.com/v1/graphql", // use wss for a secure endpoint
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

// Instantiate client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  typeDefs: gql`
    type Song {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }

    input SongInput {
      id: uuid!
      title: String!
      artist: String!
      thumbnail: String!
      duration: Float!
      url: String!
    }

    type Query {
      queue: [Song]!
    }

    type Mutation {
      addOrRemoveFromQueue(input: SongInput!): [Song]!
    }
  `,
});

const data = {
  queue: [],
};

client.writeData({ data });

export default client;
