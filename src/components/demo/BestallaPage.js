import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';

class BestallaPage extends PureComponent {
  initialState = {
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0,
  };

  state = {
    ...this.initialState,
  };

  handleChange = ({ target: { value, name }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { products, items } = this.props;
    const formName = event.target.name;
    const productId = formName.split('-');
    // check if exists
    const selectedProduct = products.find(product => product.id === parseInt(productId[1], 10));
    const alreadyInCart = items.find(item => item.id === selectedProduct.id);

    if (alreadyInCart) {
      const cartSelectedItemQty = parseInt(alreadyInCart.qty, 10);
      const stateQty = parseInt(this.state[`${productId[0]}${productId[1]}`], 10);
      this.props.onUpdateToCart(selectedProduct.id, { ...selectedProduct, qty: cartSelectedItemQty + stateQty });
    } else {
      this.props.onAddToCart({ ...selectedProduct, qty: parseInt(this.state[productId.join('')], 10) });
    }
    
    toastr.success('Tillagd!', 'Varukorgen är uppdaterad');
  }

  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <div className="row mb-1">
          <div className="col">
            <div className="dropdown dropdown-workspace dropdown-workspace-m d-lg-none d-md-block">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownWorkspace2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Välj arbetsyta här
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownWorkspace2">
                <form className="w-100">
                  <div className="input-group no-border">
                    <input type="text" value="" className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <i className="nc-icon nc-zoom-split" />
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
                <a className="dropdown-item" href="#">Site 1</a>
                <a className="dropdown-item collapse-toggle" data-toggle="collapse" href="#site-group-1-1">
                    Site Group 1 <b className="caret" />
                </a>
                <div className="collapse collapse-dropdown" id="site-group-1-1">
                  <ul className="nav">
                    <li>
                      <a href="#" className="dropdown-item">
                        Sub Site 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item">
                        Sub Site 2
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="dropdown-item" href="#">Site 2</a>
                <hr className="mb-2" />
                <a href="#" className="workspace-edit-link"><i className="fa fa-edit" />Edit Sites</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-2 pr-0 mt-2">
            <div className="card card-height card-multi-collapse">
              <div className="card-header card-header-bb">
                <h4 className="card-title card-title-s">Kategorier</h4>
              </div>
              <div className="card-body p-2 pt-0">
                <ul className="nav nav-kategorier">
                  <li><a href="#">Brevpapper</a></li>
                  <li><a href="#">Konferensblock</a></li>
                  <li><a href="#">Korrkort</a></li>
                  <li>
                    <a data-toggle="collapse" href="#sub-kuvert">
                      Kuvert
                      <b className="caret" />
                    </a>
                    <div className="collapse collapse-level-2" id="sub-kuvert">
                      <ul className="nav">
                        <li>
                          <a data-toggle="collapse" href="#sub-kuvert-2">
                            Link 1
                            <b className="caret" />
                          </a>
                          <div className="collapse collapse-level-3" id="sub-kuvert-2">
                            <ul className="nav">
                              <li>
                                <a data-toggle="collapse" href="#sub-kuvert-3">
                                  Link 2
                                  <b className="caret" />
                                </a>
                                <div className="collapse collapse-level-4" id="sub-kuvert-3">
                                  <ul className="nav">
                                    <li>
                                      <a href="#">Link 3.1</a>
                                      <a href="#">Link 3.2</a>
                                    </li>
                                  </ul>
                                </div>
                                <a href="#">Link 2.2</a>
                              </li>
                            </ul>
                          </div>
                          <a href="#">Link 2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">Mallar</a></li>
                  <li><a href="#">PostIt</a></li>
                  <li>
                    <a data-toggle="collapse" href="#sub-visitkort">
                      Visitkort
                      <b className="caret" />
                    </a>
                    <div className="collapse collapse-level-2" id="sub-visitkort">
                      <ul className="nav">
                        <li>
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-7 pr-0">
            <div className="card card-height card-category-items mb-0">
              <div className="card-header pt-0">
                <div className="row product-head-filters align-items-center flex-row">
                  <div className="col-md-3" />
                      
                  <div className="col-md-9 text-right d-flex flex-row align-items-center justify-content-end">
                    <div className="form-group mb-0 mr-3 form-group-artiklar">
                      <label for="" className="d-inline mr-1">Artiklar:</label>
                      <select name="" id="" className="form-control d-inline">
                        <option value="">25</option>
                      </select>
                    </div>
                    <ul className="pagination justify-content-end mr-3 mb-0">
                      <li className="page-item">
                        <a className="page-link" href="#link" aria-label="Previous">
                          <span aria-hidden="true"><i className="fa fa-angle-double-left" aria-hidden="true" /></span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#link">1</a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#link">2</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#link">3</a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#link" aria-label="Next">
                          <span aria-hidden="true"><i className="fa fa-angle-double-right" aria-hidden="true" /></span>
                        </a>
                      </li>
                    </ul>
                    <div className="btn-group button-group-view">
                      <button type="button" className="btn"><i className="fa fa-th-large"></i></button>
                      <button type="button" className="btn active"><i className="fa fa-th-list"></i></button>
                      <button type="button" className="btn" onclick="window.location='FileViewSiemens';"><i className="fa fa-list" /></button>
                      <button type="button" className="btn"><i className="fa fa-align-justify"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                {products.map(product => (
                  <div className="product-list-item" key={product.id}>
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <a href="#modal-dynamic-template" data-toggle="modal" data-target="#modal-dynamic-template"><img src={product.image} alt="" /></a>
                      </div>
                      <div className="col-md-8">
                        <h5 className="product-name">{product.name}</h5>
                        <p className="product-desc mb-1">Manual över turbin.</p>
                        <div className="row">
                          <div className="col-md-3">
                            <dl className="product-info">
                              <dt>Art.nr</dt>
                              <dd>123456</dd>
                            </dl>
                            <dl className="product-info">
                              <dt>Format</dt>
                              <dd>90x55 mm</dd>
                            </dl>
                            <dl className="product-info">
                              <dt>Omfång</dt>
                              <dd>2 sidor</dd>
                            </dl>
                          </div>
                          <div className="col-md-5">
                            <dl className="product-info">
                              <dt>Ansvarig</dt>
                              <dd>Anders Andersson</dd>
                            </dl>
                            <dl className="product-info">
                              <dt>Saldo</dt>
                              <dd>10 st</dd>
                            </dl>
                            <dl className="product-info">
                              <dt>Bevakningspunkt</dt>
                              <dd>5 st</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <form onSubmit={this.handleSubmit} name={`product-${product.id}`}>
                          <label for="">Antal</label>
                          <input
                            type="text"
                            className="form-control text-center w-100"
                            name={`product${product.id}`}
                            onChange={this.handleChange}
                            value={this.state[`product${product.id}`]}
                          />
                          <input type="submit" className="btn btn-sm btn-primary w-100 mb-0" value="Beställ" />
                        </form>
                      </div>
                    </div>
                  </div>
                  
                ))}
                
              </div>
          
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mt-2">
            <div className="card card-height card-news">
              <div className="card-header card-header-bb">
                <h4 className="card-title card-title-s">Nyheter</h4>
              </div>
              <div className="card-body pt-0">
                <div className="news-item">
                  <h4 className="news-title">Nyhet 1</h4>
                  <p className="news-desc">Beskrivning av nyheten kommer här. Det kan vara en fantastisk nyhet. <a href="">Läs mer här »</a></p>
                </div>
                <div className="news-item">
                  <h4 className="news-title">Nyhet 2</h4>
                  <p className="news-desc">Beskrivning av nyheten kommer här. Det kan vara en fantastisk nyhet. <a href="">Läs mer här »</a></p>
                </div>
                <div className="news-item">
                  <h4 className="news-title">Nyhet 3</h4>
                  <p className="news-desc">Beskrivning av nyheten kommer här. Det kan vara en fantastisk nyhet. <a href="">Läs mer här »</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    products: state.account.products,
    items: state.account.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: product => dispatch({ type: 'uq/account/ADD_CART', payload: product }),
    onUpdateToCart: (id, item) => dispatch({ type: 'uq/account/UPDATE_CART', payload: { id, item }})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestallaPage);