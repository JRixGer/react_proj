/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export function BrandLogo(props) {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-toggle">
        <button type="button" className="navbar-toggler">
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <a className="navbar-logo" href="#"><img src="img/siemens-logo.png" alt="" /></a>
    </div>
  );
}

export default BrandLogo;