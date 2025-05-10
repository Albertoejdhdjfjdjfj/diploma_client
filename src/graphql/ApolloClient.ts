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

const wsLink = new WebSocketLink({
  uri: REACT_APP_URL_API_WS,
  options: {
    reconnect: true,
    connectionParams: {
      authToken: Cookies.get('token')
    }
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});
