import React, { PureComponent } from 'react';
import DownloadNotif from './notifications/DownloadNotif';
import CartNotif from './notifications/CartNotif';
import BellNotif from './notifications/BellNotif';
import UserInfo from './notifications/UserInfo';

export class NotificationArea extends PureComponent {
  render() {
    const { user } = this.props;
    return(
      <ul className="navbar-nav justify-item-right">
        <DownloadNotif />
        <CartNotif />
        <BellNotif />
        <UserInfo user={user} />
      </ul>
    );
  }
}

export default NotificationArea;