/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import Swal from 'sweetalert2';

class CartNotif extends PureComponent {
  displaySubTotal = () => {
    const { items } = this.props;
    let total = 0;
    if (items.length !== 0) {
      items.forEach(item => {
        total = (item.price * item.qty) + total;
      });
    }
    return currencyFormatter.format(total, {});
  
  }

  onDeleteItem = id => {
    Swal.fire({
      title: 'Är du säker?',
      text: 'Du kan inte ångra detta!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ja, Produkten har raderats!'
      
    }).then(result => {
      if (result.value) {
        this.props.onRemoveItemCart(id);
        Swal.fire(
          'Raderad!',
          'Produkten har raderats',
          'success'
        );
      }
    });
  }

  render() {
    const { items } = this.props;
    return (
      <li className="nav-item dropdown">
        <a className="nav-link nav-link-badge dropdown-toggle" href="#" id="navbar-cart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="nc-icon nc-cart-simple" />
          {items.length !== 0 && <span className="badge badge-info badge-xs badge-icon">{items.length}</span>}
          
          <p>
            <span className="d-lg-none d-md-block">Cart</span>
          </p>
        </a>

        <div className="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbar-cart">
          <div className="dropdown-cart-item">

            <table className="mb-2">
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td className="dropdown-cart-item-img"><img src={item.image} alt="item" /></td>
                    <td className="dropdown-cart-item-name">
                      <p>{item.name}</p>
                      <span>{item.price} kr x {item.qty}</span>
                    </td>
                    <td className="dropdown-cart-item-action"><a href="#" onClick={() => this.onDeleteItem(item.id)} className="collapse-toggle"><i className="nc-icon nc-simple-remove" /></a></td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="dropdown-cart-total mb-2">
              <p>Summa</p><p className="pull-right">{this.displaySubTotal()} kr</p>
            </div>

            <div className="dropdown-cart-actions">
              <a href="/kassa" className="btn btn-primary">Kassa</a>
            </div>

          </div>
        </div>
      </li>
    );
  }
}
const mapStateToProps = state => ({
  items: state.account.cart
});

const mapDispatchToProps = dispatch => ({
  onRemoveItemCart: id => dispatch({ type: 'uq/account/REMOVE_ITEM_CART', payload: { id }})
});

export default connect(mapStateToProps, mapDispatchToProps)(CartNotif);