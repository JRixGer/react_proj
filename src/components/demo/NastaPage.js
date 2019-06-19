import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';

class NastaPage extends PureComponent {
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

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <div className="row align-items-center">
          <div className="col-12">
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
                    <li>
                      <a href="/kassa">
                        <span className="badge badge-primary">1</span> Produkter <span className="line" />
                      </a>
                    </li>
                    <li className="active"><span className="badge badge-primary">2</span> Leveransinformation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-9">
            <div className="card card-tabs tab-pane-address p-20">
              <div className="mb-3">
                <h4 className="module-title d-inline">Leveransinformation</h4>
                <a href="#" className="delete-link pull-right"><i className="fa fa-trash" /> Töm varukorgen</a>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="address-template-wrap text-left">
                    <select name="" id="" className="form-control w-25 d-inline mr-2">
                      <option value="">Välj adress</option>
                      <option value="">Address 1</option>
                      <option value="">Address 2</option>
                    </select>
                    <i 
                      className="nc-icon nc-alert-circle-i text-info" 
                      data-toggle="tooltip" 
                      data-placement="right" 
                      title="Välj adress här."
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4 text-left text-uppercase">
                      <h5 className="mb-5">LEVERANSADRESS (paket)</h5>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Avdelning" />
                        <label>Avdelning *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>sektion *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Referens" />
                        <label>referens *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Gatuadress" />
                        <label>gatuadress *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Postnummer" />
                        <label>Postnummer *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Ort" />
                        <label>ort *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Land" />
                        <label>land</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="E-post" />
                        <label>e-post</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Telefon" />
                        <label>telefon</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Leverans Info" />
                        <label>leverans info</label>
                      </div>
                    </div>
                    <div className="col-md-4 text-left text-uppercase">
                      <h5>Postadress (brev)</h5>
                      <div className="form-check mt-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" /> Use Delivery Address
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Avdelning" />
                        <label>Avdelning *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>sektion *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Referens" />
                        <label>referens *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Gatuadress" />
                        <label>gatuadress *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Postnummer" />
                        <label>Postnummer *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Ort" />
                        <label>ort *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Land" />
                        <label>land</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="E-post" />
                        <label>e-post</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Telefon" />
                        <label>telefon</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Leverans Info" />
                        <label>leverans info</label>
                      </div>
                    </div>
                    <div className="col-md-4 text-left text-uppercase">
                      <h5>fakturaadress</h5>
                      <div className="form-check mt-3">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" /> Use Delivery Address
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Avdelning" />
                        <label>Avdelning *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>sektion *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Referens" />
                        <label>referens *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Gatuadress" />
                        <label>gatuadress *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Postnummer" />
                        <label>Postnummer *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Ort" />
                        <label>ort *</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Land" />
                        <label>land</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="E-post" />
                        <label>e-post</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Telefon" />
                        <label>telefon</label>
                      </div>
                      <div className="form-group floating-label">
                        <input type="text" className="form-control" placeholder="Leverans Info" />
                        <label>leverans info</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card checkout-order-summary d-flex flex-column justify-content-center">
              <div className="card-header">
                <h4>Varukorg <span className="fs-12 ml-1 fw-normal"><i>(4 produkter totalt)</i></span> </h4>
              </div>
              <div className="card-body">
                <table className="table table-order-total mb-3">
                  {items.map(item => (
                    <tr>
                      <td>{item.name}</td>
                      <td className="text-right">{item.price * item.qty} kr</td>
                    </tr>
                  ))}
                  <tr className="order-total">
                    <td>Totalt</td>
                    <td className="text-right">{this.showTotal()} kr</td>
                  </tr>
                </table>
                <div className="form-group floating-label">
                  <textarea className="form-control" placeholder="Meddelande" />
                  <label>Meddelande</label>
                </div>
                <div className="form-group floating-label">
                  <input type="text" className="form-control" placeholder="Kostnadsställe 1" />
                  <label>Kostnadsställe 1</label>
                </div>
                <div className="form-group floating-label">
                  <input type="text" className="form-control" placeholder="Kostnadsställe 2" />
                  <label>Kostnadsställe 2</label>
                </div>
                <div className="form-group floating-label">
                  <input type="text" className="form-control" placeholder="Kostnadsställe 3" />
                  <label>Kostnadsställe 3</label>
                </div>
                <div className="form-group" >
                  <input type="text" className="form-control datepicker" placeholder="Önskat leveransdatum" />
                </div>
                <div className="form-group floating-label">
                  <input type="email" className="form-control" placeholder="Bekräftelsemail" />
                  <label>Bekräftelsemail</label>
                </div>
                <div className="form-group mb-4">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Jag har förstått..</label>
                </div>
                <div className="mt-2 mb-4 text-right">
                  <a href="/thankyou" className="btn btn-primary d-block">
                    <i className="fa fa-paper-plane mr-2" /> Skicka beställning
                  </a>
                </div>
                <div>
                  <a href="/kassa"><i className="fa fa-long-arrow-alt-left mr-1" /> Tillbaka</a>
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

export default connect(mapStateToProps)(NastaPage);