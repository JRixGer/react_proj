import React, { Component } from 'react';
import Header from './demoHeader/Header';

export class DemoLayout extends Component {
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

export default DemoLayout;
