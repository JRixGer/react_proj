import React, { PureComponent, Fragment } from 'react';

export default class DashboardPage extends PureComponent {

  render() {
    return (
      <Fragment>
        
        <div className="row justify-content-center">
          
          <div className="col-md-8">
            <div className="card card-user-info">
              <div className="card-body ">
                <div className="row align-items-center mb-4">
                  <div className="col-md-12 text-center">
                    <div className="user mb-3">
                      <div className="photo mb-4" />
                      <h3 className="user-name">Välkommen till Siemens Industrial Turbomachinerys
                        <br />Webbportal 
                        <strong>Robert Lönn</strong>!
                      </h3>
                    </div>
                    <h3 className="user-name">Here you can:</h3>
                  </div>
                </div>
                <div className="row justify-content-center mb-3">
                  <div className="col-md-4">
                    <a href="/bestalla" className="db-welcome-box">
                      <i className="fa fa-cart-plus" />
                      Beställ marknadsmaterial
                      <p>Siemens portal för att hantera marknadsmaterial.</p>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a 
                      href="https://www.uniqueue.se/UniQueue3/OneStream2.mvc"
                      target="_blank" 
                      className="db-welcome-box"
                    >
                      <i className="fa fa-file-alt" />
                      Skapa kunddokumentation
                      <p>Siemens verktyg för att hantera kunddokumentation för turbiner och kraftverk genom hela livscykeln.</p>
                    </a>
                  </div>
                </div>
                <div className="row justify-content-center mb-3">
                  <div className="col-md-4">
                    <a href="#" className="db-welcome-box">
                      <i className="fa fa-archive" />
                      Dokumenthantering
                      <p>Hantera dina dokument på ett enkelt, säkert och strukturerat sätt. Dela dina filer - närsomhelst och var du än är.</p>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="#" className="db-welcome-box">
                      <i className="fa fa-chalkboard-teacher" />
                      Projekthantering
                      <p>Skapa din projektplan, organisera ditt team och få en överblick på hur ditt eller dina projekt och hur dem går - närsomhelst och var du än är.</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Fragment>
    );
  }
}