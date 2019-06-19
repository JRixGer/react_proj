import React, { PureComponent } from 'react';

export class SiteMenu extends PureComponent {
  render() {
    return (
      <div className="menubar-wrapper" id="header-site">
        <ul className="nav nav-menu">
          <li><a href="/dashboard">Översikt</a></li>
          <li><a href="/bestalla">Beställa</a></li>
          <li><a href="/products">Dokument</a></li>
          <li><a href="#">Orderhistorik</a></li>
          <li className="nav-item dropdown dropdown-views">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hjälp</a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-alert">
              <a className="dropdown-item" href="#">Om</a>
              <a className="dropdown-item" href="#">Kontakt</a>
              <a className="dropdown-item" href="#">Synpunkter / Support</a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SiteMenu;
