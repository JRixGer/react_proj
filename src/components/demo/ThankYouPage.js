import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

class ThankYouPage extends PureComponent {
  componentDidMount() {
    this.props.onClearCart();

    const notif = {
      message: 'Din order är mottagen',
      created: new Date(),
      read: false,
      type: 'success',
      id: new Date().getTime() / 1000
    };

    this.props.onAddNotification(notif);
  }

  render() {
    return (
      <Fragment>
        <div className="row mb-4">
          <div className="col">
            <div className="dropdown dropdown-workspace dropdown-workspace-m d-lg-none d-md-block">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownWorkspace2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                <a className="dropdown-item" href="#">Site Header</a>
                <a className="dropdown-item" href="#">Project Header</a>
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
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card card-cart-thanks text-center">
              <div className="card-body py-5">
                <img src="img/cart-speed.svg" className="mb-5" alt="speed" />
                <h1 className="fs-20 mb-4">Tack för din beställning, då detta är<br /> ett demokonto har ordern ej processats.</h1>
                <a href="/dashboard" className="btn btn-primary mb-0">OK</a>
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
  onClearCart: () => dispatch({ type: 'uq/account/CLEAR_CART' }),
  onAddNotification: payload => dispatch({ type: 'uq/account/ADD_NOTIFICATION', payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThankYouPage);