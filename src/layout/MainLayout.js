import React, { Component } from 'react';
import Header from './header/Header';

export class MainLayout extends Component {
  render() {
    const { children, user } = this.props;

    return (
      <div className="wrapper">
        <div className="main-panel">
          <Header user={user} />
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
