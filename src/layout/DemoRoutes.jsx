import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../components/demo/LandingPage';
import LoginPage from '../components/demo/LoginPage';
import DashboardPage from '../components/demo/DashboardPage';
import BestallaPage from '../components/demo/BestallaPage';
import KassaPage from '../components/demo/KassaPage';
import NastaPage from '../components/demo/NastaPage';
import ThankYouPage from '../components/demo/ThankYouPage';
import ProductPage from '../components/demo/ProductsPage';

import DemoLayout from './DemoLayout';
import BlankLayout from './BlankLayout';


export class DemoRoutes extends React.Component {
  render() {
    return (

      <Switch>
        
        <Route
          path="/"
          exact
          render={matchProps => (
            <BlankLayout>
              <LandingPage {...matchProps} />
            </BlankLayout>
          )}
        />

        <Route
          path="/login"
          exact
          render={matchProps => (
            <BlankLayout>
              <LoginPage {...matchProps} />
            </BlankLayout>
          )}
        />

        <Route
          path="/dashboard"
          exact
          render={matchProps => (
            <DemoLayout>
              <DashboardPage {...matchProps} />
            </DemoLayout>
          )}
        />

        <Route
          path="/bestalla"
          exact
          render={matchProps => (
            <DemoLayout>
              <BestallaPage {...matchProps} />
            </DemoLayout>
          )}
        />

        <Route
          path="/kassa"
          exact
          render={matchProps => (
            <DemoLayout>
              <KassaPage {...matchProps} />
            </DemoLayout>
          )}
        />

        <Route
          path="/nasta"
          exact
          render={matchProps => (
            <DemoLayout>
              <NastaPage {...matchProps} />
            </DemoLayout>
          )}
        />

        <Route
          path="/thankyou"
          exact
          render={matchProps => (
            <DemoLayout>
              <ThankYouPage {...matchProps} />
            </DemoLayout>
          )}
        />
        
        <Route
          path="/products"
          exact
          render={matchProps => (
            <DemoLayout>
              <ProductPage {...matchProps} />
            </DemoLayout>
          )}
        />
            
      </Switch>
    );
  }
}

export default withRouter(DemoRoutes);
