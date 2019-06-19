/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';

export class BellNotif extends PureComponent {
  render() {
    return (
      <li className="nav-item nav-item-notif dropdown">
        <a className="nav-link nav-link-badge dropdown-toggle" href="#" id="navbar-alert" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="nc-icon nc-bell-55"></i>
            <span className="badge badge-info badge-xs badge-icon">3</span>
            <p>
                <span className="d-lg-none d-md-block">Notifications</span>
            </p>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-notif" aria-labelledby="navbar-alert">
            <p className="dropdown-notif-head">New Notifications</p>
            <table className="mb-2 w-100">
              <tbody>
                <tr>
                    <td className="dropdown-notif-icon completed"><i className="nc-icon nc-check-2"></i></td>
                    <td className="dropdown-notif-info">
                        <p>Your order <a href="#">Visitkort förbundskontoret</a> has been completed.</p>
                        <span>a day ago</span>
                    </td>
                </tr>
                <tr>
                    <td className="dropdown-notif-icon cancelled"><i className="nc-icon nc-simple-remove"></i></td>
                    <td className="dropdown-notif-info">
                        <p>Your order <a href="#">Visitkort förbundskontoret</a> has been cancelled.</p>
                        <span>about a minute ago</span>
                    </td>
                </tr>
              </tbody>
            </table>
            <p className="text-center d-block"><a href="#" className="dropdown-notif-all">View all</a></p>
        </div>
      </li>
    );
  }
}

export default BellNotif;