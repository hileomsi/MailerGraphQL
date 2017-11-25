import React from 'react';
import { StatusBar } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { StackNavigator } from 'react-navigation';
//config
import client from 'config/apollo';
import 'config/reactotron';
//pages
import Inbox from 'pages/Inbox';
import Message from 'pages/Message';
import NewMessage from 'pages/NewMessage';

StatusBar.setBarStyle('light-content');

const Router = StackNavigator({
  Inbox: { screen: Inbox, path: 'Inbox' },
  Message: { screen: Message, path: 'Message' },
  NewMessage: { screen: NewMessage, path: 'NewMessage' }
}, {
  initialRouteName: 'Inbox'
});

const App = () => (
  <ApolloProvider client={client} >
    <Router />
  </ApolloProvider>
);

export default App;
