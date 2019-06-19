import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import UQClient from './client';

export default class FMCProvider extends Component {
  render() {
    console.log('env', process.env.REACT_APP_GRAPHQL_URL);
    const { children } = this.props;
    return (
      <ApolloProvider client={UQClient}>
        {children}
      </ApolloProvider>);
  }
}