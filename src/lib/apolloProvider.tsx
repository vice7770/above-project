import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { Auth } from "aws-amplify";

// Set up Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_API_URL,
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
