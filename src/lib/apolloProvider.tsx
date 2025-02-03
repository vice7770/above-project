import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
// import { Auth } from "aws-amplify";

// HTTP Link for Queries & Mutations
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    "x-api-key": import.meta.env.VITE_API_KEY,
  },
});

// WebSocket Link for Subscriptions
const wsLink = new GraphQLWsLink(
  createClient({
    url: import.meta.env.VITE_WS_URL, // WebSocket URL (wss://example.com/graphql)
    connectionParams: {
      "x-api-key": import.meta.env.VITE_API_KEY, // Pass API key directly
    },
  })
);

// Use split to direct queries/mutations to HTTP and subscriptions to WebSocket
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// Create Apollo Client instance
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;