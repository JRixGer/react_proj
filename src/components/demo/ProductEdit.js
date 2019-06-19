import React from 'react';

import LinkDocuments from './products/tabs/LinkDocuments';
import BusinessInformation from './products/tabs/BusinessInformation';
import ProductInformation from './products/tabs/ProductInformation';
import DynamicForm from './products/tabs/DynamicForm';
import Stocks from './products/tabs/Stocks';
import Publish from './products/tabs/Publish';

export default class productEdit extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card card-tabs card-tabs-v3 mb-0">
        <div className="card-body card-body-p-0">
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item w-auto">
                  <a className="nav-link py-2 active" data-toggle="tab" href="#produkt-1" role="tab" aria-expanded="true">
                    <span className="card-tabs-title">Länkade dok.</span>
                  </a>
                </li>
                <li className="nav-item w-auto">
                  <a className="nav-link py-2" data-toggle="tab" href="#produkt-6" role="tab" aria-expanded="false">
                    <span className="card-tabs-title">Affärsinfo.</span>
                  </a>
                </li>
                <li className="nav-item w-auto">
                  <a className="nav-link py-2" data-toggle="tab" href="#produkt-2" role="tab" aria-expanded="false">
                    <span className="card-tabs-title">Produktinfo.</span>
                  </a>
                </li>
                <li className="nav-item w-auto">
                  <a className="nav-link py-2" data-toggle="tab" href="#produkt-3" role="tab" aria-expanded="false">
                    <span className="card-tabs-title">Redigerbar</span>
                  </a>
                </li>
                <li className="nav-item w-auto">
                  <a className="nav-link py-2" data-toggle="tab" href="#produkt-4" role="tab" aria-expanded="false">
                    <span className="card-tabs-title">Lager</span>
                  </a>
                </li>
                <li className="nav-item w-auto">
                  <a className="nav-link py-2" data-toggle="tab" href="#produkt-5" role="tab" aria-expanded="false">
                    <span className="card-tabs-title">Visning</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content px-3 py-3">
            <LinkDocuments product={product} />
            <BusinessInformation />
            <ProductInformation product={product} />
            <DynamicForm />
            <Stocks product={product} />
            <Publish />
            
          </div>
        </div>
      </div>
    );
  }
}
