import React, { PureComponent, Fragment } from 'react';
import Navbar from './Navbar';
import SiteMenu from './SiteMenu'

export class Header extends PureComponent {
  render() {
    const { user } = this.props;
    console.log('user', user);
    return (
      <Fragment>
        <Navbar user={user} />
        <SiteMenu />
      </Fragment>
    );
  }
}

export default Header;
