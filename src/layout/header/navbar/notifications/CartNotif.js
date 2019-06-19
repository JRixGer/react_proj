/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';

export class CartNotif extends PureComponent {
  render() {
    return (
      <li className="nav-item dropdown">
        <a className="nav-link nav-link-badge dropdown-toggle" href="#" id="navbar-cart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="nc-icon nc-cart-simple" />
          <span className="badge badge-info badge-xs badge-icon">2</span>
          <p>
            <span className="d-lg-none d-md-block">Cart</span>
          </p>
        </a>

        <div className="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbar-cart">
          <div className="dropdown-cart-item">

            <table className="mb-2">
              <tbody>
                <tr>
                  <td className="dropdown-cart-item-img"><img src="../assets/img/product-img.png" alt="" /></td>
                  <td className="dropdown-cart-item-name">
                    <p>Visitkort förbundskontoret</p>
                    <span>199,00 kr</span>
                  </td>
                  <td className="dropdown-cart-item-action"><a href="#" className="collapse-toggle"><i className="nc-icon nc-simple-remove"></i></a></td>
                </tr>
                <tr>
                  <td className="dropdown-cart-item-img"><img src="../assets/img/product-img.png" alt="" /></td>
                  <td className="dropdown-cart-item-name">
                    <p>Visitkort förbundskontoret</p>
                    <span>199,00 kr</span>
                  </td>
                  <td className="dropdown-cart-item-action"><a href="#" className="collapse-toggle"><i className="nc-icon nc-simple-remove"></i></a></td>
                </tr>
              </tbody>
            </table>

            <div className="dropdown-cart-total mb-2">
              <p>Summa</p><p className="pull-right">199,00 kr</p>
            </div>

            <div className="dropdown-cart-actions">
              <a href="checkout-v2" className="btn btn-primary">Kassa</a>
            </div>

          </div>
        </div>
      </li>
    );
  }
}

export default CartNotif;