
import { split } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';

const http = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjab55e1y058o0142o5nagl70'
});

const ws = new WebSocketLink({
  uri: 'wss://subscriptions.graph.cool/v1/cjab55e1y058o0142o5nagl70',
  options: { reconnect: true }
});

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query);
  return kind === 'OperationDefinition' && operation === 'subscription';
}, ws, http);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default client;