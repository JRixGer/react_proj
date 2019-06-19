/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

export function BrandLogo(props) {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-toggle">
        <button type="button" className="navbar-toggler">
        <span className="navbar-toggler-bar bar1"></span>
        <span className="navbar-toggler-bar bar2"></span>
        <span className="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <a className="navbar-brand" href="/"></a>
    </div>
  );
}

export default BrandLogo;