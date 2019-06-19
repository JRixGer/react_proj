/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

export class BellNotif extends PureComponent {
  render() {
    const { notifications } = this.props;
    return (
      <li className="nav-item nav-item-notif dropdown">
        <a className="nav-link nav-link-badge dropdown-toggle" href="#" id="navbar-alert" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="nc-icon nc-bell-55" />
          {notifications.length !== 0 && <span className="badge badge-info badge-xs badge-icon">{notifications.length}</span>}

          <p>
            <span className="d-lg-none d-md-block">Notifications</span>
          </p>
        </a>
        {notifications.length !== 0 && (
          <div className="dropdown-menu dropdown-menu-right dropdown-notif" aria-labelledby="navbar-alert">
            <p className="dropdown-notif-head">Nya meddelanden</p>
            <table className="mb-2 w-100">
              <tbody>
                {notifications.map(notif => (
                  <tr key={notif.id}>
                    <td className="dropdown-notif-icon completed"><i className="nc-icon nc-check-2" /></td>
                    <td className="dropdown-notif-info">
                      <p>{notif.message}</p>
                      <span>{moment(notif.created).fromNow()}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-center d-block"><a href="#" className="dropdown-notif-all">View all</a></p>
          </div>
        )}
        
      </li>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.account.notifications
});

export default connect(mapStateToProps)(BellNotif);