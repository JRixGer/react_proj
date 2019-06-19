/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import shortName from 'helpers/shortName';

export class UserInfo extends PureComponent {
  render() {
    const { user } = this.props;
    const firstname = user && user.firstname;
    const lastname = user && user.lastname;
    const abrName = shortName(`${firstname} ${lastname}`);
    return (
      <li className="nav-item nav-item-account dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbar-account" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="profile profile-initial">
            <span className="profile-initial-txt">{abrName}</span>
          </div>
          <span>{firstname}</span>
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-alert">
          <div className="account-info">
            <p className="account-name">{firstname}</p>
            <p className="account-role">{lastname}</p>
          </div>
          <hr />
          <a className="dropdown-item" href="#"><i className="nc-icon nc-settings"></i> Kontoinställningar</a>
          <a className="dropdown-item" href="#modal-support" data-toggle="modal" data-target="#modal-support"><i className="nc-icon nc-support-17"></i> Synpunkter / Support</a>
          <a className="dropdown-item" href="MyNotifications"><i className="nc-icon nc-chat-33"></i> Mina bevakningar</a>
          <a className="dropdown-item" href="#"><i className="nc-icon nc-box"></i> Mina ordrar</a>
          <hr className="mt-0" />
          <a className="dropdown-item" href="#"><i className="nc-icon nc-button-power"></i> Logga ut</a>
        </div>
      </li>
    );
  }
}

export default UserInfo;
