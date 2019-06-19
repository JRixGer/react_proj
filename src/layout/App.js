
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import ME_QUERY from '../graphql/queries/me';

import Routes from './Routes';

export class App extends Component {
  
  render() {
    const { 
      meQuery: { me, loading: meLoading, error: meError }, 
    } = this.props;
    if (meError) {
      return <div>Check network connection</div>;
    }
    if (meLoading) return <div>Loading...</div>;
    return (
      <Router>{!meLoading && <Routes user={me} />}</Router>
    );
  }
}

const AppWithGraphQL = compose(
  graphql(ME_QUERY, {
    name: 'meQuery'
  }),
)(App);

export default AppWithGraphQL;
