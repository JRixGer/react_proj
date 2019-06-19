import React, { PureComponent, Fragment } from 'react';
import FoldersList from './leftnav/FoldersList';
import ProductsList from './products/ProductsList';

export default class ProductPage extends PureComponent {

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-2">
            <FoldersList />
          </div>
          <div className="col-sm-12 col-md-9 col-lg-10">
            <ProductsList />
          </div>
        </div>
      </Fragment>
    );
  }
}