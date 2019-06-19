import { ApolloClient } from 'apollo-client';

import { HttpLink } from 'apollo-link-http';
import { RetryLink } from 'apollo-link-retry';

import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

import errorLink from './apollo-link-error';
import config from '../../config';



const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
}));

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL || config.graphqlUrl,
});


const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: process.env.NODE_ENV === 'development' ? 0 : 3,
    retryIf: error => !!error
  }
});

const dataLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition'
    );
  },
  httpLink,
);



// TODO: Add dynamic env name
const client = new ApolloClient({
  name: 'uq-webapp',
  version: '0.1',
  link: retryLink.concat(authLink.concat(errorLink.concat(dataLink))),
  cache: new InMemoryCache(),
});



export default client;
