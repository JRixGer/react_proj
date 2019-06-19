import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { sortBy } from 'underscore';
import currencyFormatter from 'currency-formatter';
import Swal from 'sweetalert2';

class KassaPage extends PureComponent {
  incrementQty = item => {
    this.props.onUpdateToCart(item.id, { ...item, qty: item.qty + 1 });
  }

  decrementQty = item => {
    this.props.onUpdateToCart(item.id, { ...item, qty: item.qty - 1 });
  }

  showTotal = () => {
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
    const products = sortBy(items, 'id');
    return (
      <Fragment>
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="cart-overview">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <i className="nc-icon nc-cart-simple" />
                  <span className="badge badge-info badge-xs badge-icon">{items.length}</span>
                  <h4 className="module-title d-inline">Visa min varukorg för</h4>
                  <select name="" className="form-control d-inline w-50 ml-2" id="">
                    <option value="">Beata</option>
                  </select>
                </div>
                <div className="col-md-6 text-right">
                  <ul className="list-steps">
                    <li className="active">
                      <span className="badge badge-primary">1</span> Produkter <span className="line" />
                    </li>
                    <li>
                      <a href="/nasta">
                        <span className="badge badge-primary">2</span> Leveransinformation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="card card-tabs">
              <div className="row">
                <div className="col-md-12">
                  <div className="item-list-wrap">
                    <div className="mb-3">
                      <h4 className="module-title d-inline">Produkter</h4>
                      <a href="#" className="delete-link pull-right">
                        <i className="fa fa-trash" /> Töm varukorgen
                      </a>
                    </div>
                    <div className="table-responsive-lg">
                      <table className="table table-review-order">
                        <thead className="">
                          <tr>
                            <th className="text-center" />
                            <th className="text-left">
                                PRODUKT
                            </th>
                            <th />
                            <th>ARTIKELNR</th>
                            <th className="text-center">
                                ANTAL
                            </th>
                            <th className="text-right">
                                Á-PRIS
                            </th>
                            <th className="text-right">
                                SUMMA
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.sort().map(item => (
                            <tr key={item.id}>
                              <td className="td-actions">
                                <a href="#" onClick={() => this.onDeleteItem(item.id)} className="mr-1" data-toggle="tooltip" data-placement="top" title="Ta bort">
                                  <i className="fa fa-times" />
                                </a>
                                
                              </td>
                              <td className="td-product-img">
                                <img src={item.image} alt="" />
                              </td>
                              <td className="td-product text-left">
                                <p><strong>{item.name}</strong></p>
                                <span>Art. nr: 897576418</span>
                                <span>Format: A5</span>
                                <span>Sidomfang: 20 sidor</span>
                              </td>
                              <td>
                                  123456
                              </td>
                              <td className="td-qty">
                                <input type="text" className="form-control" readOnly value={item.qty} />
                                <div className="btn-group btn-group-sm">
                                  <button className="btn btn-outline-default btn-round" onClick={() => this.decrementQty(item)}> <i className="nc-icon nc-simple-delete" /></button>
                                  <button className="btn btn-outline-default btn-round" onClick={() => this.incrementQty(item)}> <i className="nc-icon nc-simple-add" /></button>
                                </div>
                              </td>
                              <td className="td-pris text-right">
                                {currencyFormatter.format(item.price, {})} kr
                              </td>
                              <td className="td-summa text-right">
                                {currencyFormatter.format((item.price * item.qty), {}) } kr
                              </td>
                            </tr>
                          ))}
                          
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card checkout-order-summary d-flex flex-column">
              <div className="card-header">
                <h4>Varukorg <span className="fs-12 ml-1 fw-normal"><i>(4 produkter totalt)</i></span> </h4>
              </div>
              <div className="card-body">
                <table className="table table-order-total mb-4">
                  <tbody>
                    {products.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td className="text-right">{item.price * item.qty} kr</td>
                      </tr>
                    ))}
                    <tr className="order-total">
                      <td>Totalt</td>
                      <td className="text-right">{this.showTotal()} kr</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-right mt-4">
                  <a href="/nasta" className="btn btn-primary d-inline">
                    Nästa <i className="fa fa-long-arrow-alt-right ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.account.cart,
});

const mapDispatchToProps = dispatch => ({
  onUpdateToCart: (id, item) => dispatch({ type: 'uq/account/UPDATE_CART', payload: { id, item }}),
  onRemoveItemCart: id => dispatch({ type: 'uq/account/REMOVE_ITEM_CART', payload: { id }})
});
  

export default connect(mapStateToProps, mapDispatchToProps)(KassaPage);
