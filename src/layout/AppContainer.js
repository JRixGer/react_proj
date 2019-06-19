/* eslint no-console: 0 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'startup/redux';
import { ApolloProvider } from 'startup/apollo';
import { AuthProvider } from '../providers/authProvider';
import App from './App';

export class AppContainer extends Component {
  render() {
    return (
      <AuthProvider>
        <ApolloProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </AuthProvider>
    );
  }
}

export default AppContainer;
