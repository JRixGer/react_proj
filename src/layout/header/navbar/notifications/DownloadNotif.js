import React, { PureComponent } from 'react';

export class DownloadNotif extends PureComponent {
  render() {
    return(
      <li className="nav-item">
        <a className="nav-link nav-link-badge" href="ImageDownload">
          <i className="nc-icon nc-album-2"></i>
          <span className="badge badge-info badge-xs badge-icon">3</span>
          <p>
            <span className="d-lg-none d-md-block">Download Images</span>
          </p>
        </a>
      </li>
    );
  }
}

export default DownloadNotif;