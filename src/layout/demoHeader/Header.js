import React, { PureComponent, Fragment } from 'react';
import Navbar from './Navbar';
import SiteMenu from './SiteMenu';

export class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <Navbar />
        <SiteMenu />
      </Fragment>
    );
  }
}

export default Header;
