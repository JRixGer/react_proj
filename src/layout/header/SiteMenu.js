import React, { PureComponent } from 'react';

export class SiteMenu extends PureComponent {
  render() {
    return (
      <div className="menubar-wrapper" id="header-site">
        <ul className="nav nav-menu">
          <li><a href="dashboard">Översikt</a></li>
        </ul>
      </div>
    );
  }
}

export default SiteMenu;
