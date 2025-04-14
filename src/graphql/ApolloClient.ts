import { ApolloClient, InMemoryCache } from '@apollo/client';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import Cookies from 'js-cookie';

interface Env {
  REACT_APP_URL_API: string;
  REACT_APP_URL_API_WS: string;
}

const { REACT_APP_URL_API, REACT_APP_URL_API_WS } = process.env as unknown as Env;

const httpLink = new HttpLink({
  uri: REACT_APP_URL_API
});

// const wsLink = new WebSocketLink({
//   uri: "ws://localhost:4000/graphql",
//   options: {
//     reconnect: true,
//     connectionParams: {
//         authToken:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Y2ZGFjMGE2MjVmMWQ4YmMzMmRkM2UiLCJlbWFpbCI6IjEiLCJuaWNrbmFtZSI6IjEiLCJpYXQiOjE3NDQ1NTkyMTh9.J6RK0wdmmgxXXnLv_QmCnrJZbWPDahP0I0RMxMPdIJg"
//     }
//   }
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
//   },
//   wsLink,
//   httpLink
// );

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
