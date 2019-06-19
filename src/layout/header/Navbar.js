import React, { PureComponent } from 'react';
import BrandLogo from './navbar/BrandLogo';
import SiteDropdown from './navbar/SiteDropdown';
import TopSearch from './navbar/TopSearch';
import NotificationsArea from './navbar/NotificationsArea'

export class Navbar extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-lg mb-0">
        <div className="container-fluid">
          <BrandLogo />

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          
          <SiteDropdown />
          <div className="collapse navbar-collapse justify-content-end align-items-center" id="navigation">
            <TopSearch />
            <NotificationsArea user={user}/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;