import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Callback } from '../components/auth/callback';
import { Logout } from '../components/auth/logout';
import { LogoutCallback } from '../components/auth/logoutCallback';

import { PrivateRoute } from '../routes/privateRoute';
import { SilentRenew } from '../components/auth/silentRenew';
import PrivatePage from '../components/privatePage';

import MainLayout from './MainLayout';


export class Routes extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Switch>
        <Route exact path="/signin-oidc" component={Callback} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/logout/callback" component={LogoutCallback} />
        <Route exact path="/silentrenew" component={SilentRenew} />
        <PrivateRoute path="/sign-in" component={PrivatePage} />
        {!user && <Redirect to="/sign-in" />}

        {user && (
          <MainLayout user={user}>
            <Switch>
              <Route path="/" component={PrivatePage} />
              
            </Switch>
          </MainLayout>
        )}
      </Switch>
    );
  }
}

export default withRouter(Routes);
