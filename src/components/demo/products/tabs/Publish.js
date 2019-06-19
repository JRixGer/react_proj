import React, { PureComponent } from 'react';

class Publish extends PureComponent {
  render() {
    return (
      <div className="tab-pane tab-pane-address p-0" id="produkt-5" role="tabpanel" aria-expanded="false">
        <div className="row">
          <div className="col-md-6">
            <div className="form-check form-check-sm mb-0">
              <label className="form-check-label fs-10 pl-4">
                <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Aktiv (artikeln visas)
                <span className="form-check-sign" />
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-3">
            <div className="form-group mb-0">
              <label htmlFor="">Från datum</label>
              <input type="text" className="form-control datepicker" defaultValue="10/05/2018" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group mb-0">
              <label htmlFor="">Till datum:</label>
              <input type="text" className="form-control datepicker" defaultValue="10/05/2018" />
            </div>
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-12">
            <div className="form-check form-check-sm mb-2">
              <label className="form-check-label fs-10 pl-4">
                <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Visa artikeln endast då den ingår i ett paket.
                <span className="form-check-sign" />
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div id="" className="accordion-default card-collapse pb-0" role="tablist" aria-multiselectable="true">
              <div className="card card-plain">
                <div className="card-header" role="tab" id="heading-10">
                  <a className="collapsed" data-toggle="collapse" href="#collapse-10" aria-expanded="true" aria-controls="collapse-10">
                  Skapa länk till artikel
                  <i className="nc-icon nc-minimal-down" />
                  </a>
                </div>
                <div id="collapse-10" className="collapse show" aria-labelledby="heading-10" data-parent="">
                  <div className="card-body">
                    <p className="fs-12 mb-2">Placera länken i följande mapp</p>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Välj mapp" defaultValue="" />
                      <label className="mb-0">Välj mapp</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="...eller sök efter mapp" defaultValue="" /> 
                      <label className="mb-0">...eller sök efter mapp</label>
                    </div>
                    <div className="form-group mb-0">
                      <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0">Lägg till</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-plain">
                <div className="card-header" role="tab" id="heading-11">
                  <a className="collapsed" data-toggle="collapse" href="#collapse-11" aria-expanded="true" aria-controls="collapse-11">
                    Artikeln är länkad till dessa mappar
                    <i className="nc-icon nc-minimal-down" /> 
                  </a>
                </div>
                <div id="collapse-11" className="collapse show" aria-labelledby="heading-11" data-parent="">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <p className="fs-12 mb-0">ArbetsmiljöTa 
                          <a href="#" className="text-primary ml-2">
                            <i className="fa fa-times-circle" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="" className="accordion-default card-collapse pb-0" role="tablist" aria-multiselectable="true">
              <div className="card card-plain">
                <div className="card-header" role="tab" id="heading-12">
                  <a className="collapsed" data-toggle="collapse" href="#collapse-12" aria-expanded="true" aria-controls="collapse-12">
                  Nyhet
                    <i className="nc-icon nc-minimal-down" /> 
                  </a>
                </div>
                <div id="collapse-12" className="collapse show" aria-labelledby="heading-12" data-parent="">
                  <div className="card-body">
                    <div className="form-check form-check-sm mb-2">
                      <label className="form-check-label fs-10 pl-4">
                        <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Visa som nyhet
                        <span className="form-check-sign" /> 
                      </label>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Från datum</label>
                      <input type="text" className="form-control datepicker" defaultValue="10/05/2018" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Till datum:</label>
                      <input type="text" className="form-control datepicker" defaultValue="10/05/2018" />
                    </div>
                    <div className="form-group mb-0">
                      <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0">Spara nyheter</a>
                    </div>
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

export default Publish;