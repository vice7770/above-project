import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";

interface ApolloProviderProps {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: import.meta.env.VITE_API_URL,
  credentials: "include",
  headers: {
    "content-type": "application/json",
    "x-api-key": import.meta.env.VITE_API_KEY,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "origin": "*",
  },
  cache: new InMemoryCache(),
});

export const ApolloWrapper = ({ children }: ApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};


// const client = new ApolloClient({
//     link: new HttpLink({
//         uri: 'https://qzdu2mazrzfr3pvzuv6z5txkji.appsync-api.us-east-1.amazonaws.com/graphql',
//         fetchOptions: {
//           mode: 'no-cors'
//         },
//         headers: {
//             'x-api-key': 'da2-rfoyixwcavdyxoivvmgh4h2qfu'
            
//         }
//     }),
//     cache: new InMemoryCache(),
// });