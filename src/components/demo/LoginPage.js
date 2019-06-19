import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class LoginPage extends PureComponent {
  initialState = {
    username: '',
    password: '',
  };

  state = {
    ...this.initialState,
  };

  handleChange = ({ target: { value, name }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      username, password
    } = this.state;
    if (username === 'sitab@siemens.com') {
      this.props.onSetAccount({ username, password });
      this.props.history.push('/dashboard');
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-page login-page-siemens">
        <div className="wrapper wrapper-full-page ">
          <div className="full-page section-image" data-image="img/siemens-bg.jpg">
            <div className="content">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 text-center">
                    <a className="mb-4 logo" href="/"><img src="img/siemens-logo.png" alt="" /></a>
                    <form className="form" onSubmit={this.handleSubmit}>
                      <div className="card card-login">
                        <div className="card-header ">
                          <div className="card-header ">
                            <h3 className="header text-center mb-3">Login</h3>
                          </div>
                        </div>
                        <div className="card-body ">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="nc-icon nc-single-02" />
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="UserName"
                              name="username"
                              placeholder="Användarnamn"
                              onChange={this.handleChange}
                              value={username}
                            />
                          </div>
                          <div className="input-group mb-1">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="nc-icon nc-key-25" />
                              </span>
                            </div>
                            <input
                              type="password"
                              id="Password"
                              name="password"
                              placeholder="Lösenord"
                              className="form-control"
                              onChange={this.handleChange}
                              value={password}
                            />
                          </div>
                        </div>
                        <div className="card-footer mb-2">
                          <input
                            type="submit"
                            id="loginbutton"
                            value="Get Started"
                            className="btn btn-primary btn-block mb-3"
                          />
                          <div className="text-left">
                            <a href="/">Skapa konto</a>
                            <a href="/" className="pull-right">Glömt Lösenord?</a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account
});


const mapDispatchToProps = dispatch => ({
  onSetAccount: user => dispatch({ type: 'uq/account/SET_ACCOUNT', payload: user })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);