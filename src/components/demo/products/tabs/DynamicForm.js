import React, { PureComponent } from 'react';
import $ from 'jquery';

class DynamicForm extends PureComponent {

  componentDidMount() {
    $('[data-toggle="switch"]').bootstrapSwitch();
  }

  render() {
    return (
      <div className="tab-pane tab-pane-address p-0" id="produkt-3" role="tabpanel" aria-expanded="false">
        <div className="card card-tabs card-tabs-v3 mb-0">
          <div className="card-body card-body-p-0">
            <div className="row mb-2 align-items-center">
              <div className="col-12">
                <label htmlFor="" className="fs-12 mr-1 fw-normal">Redigerbar (dynamisk): </label>
                <input className="bootstrap-switch" type="checkbox" data-toggle="switch" defaultChecked data-on-label="<i class='nc-icon nc-check-2'></i>" data-off-label="<i class='nc-icon nc-simple-remove'></i>" data-on-color="success" data-off-color="success" />
              </div>
            </div>
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item w-auto">
                    <a className="nav-link py-2 active" data-toggle="tab" href="#produkt-3-1" role="tab" aria-expanded="true">
                      <span className="card-tabs-title">Förhandsgranskning</span>
                    </a>
                  </li>
                  <li className="nav-item w-auto">
                    <a className="nav-link py-2" data-toggle="tab" href="#produkt-3-2" role="tab" aria-expanded="false">
                    <span className="card-tabs-title">Filer</span>
                    </a>
                  </li>
                  <li className="nav-item w-auto">
                    <a className="nav-link py-2" data-toggle="tab" href="#produkt-3-3" role="tab" aria-expanded="false">
                      <span className="card-tabs-title">Personallistor</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content p-0">
              <div className="tab-pane tab-pane-address p-0 active" id="produkt-3-1" role="tabpanel" aria-expanded="true">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <div className="dynamic-img-info dynamic-info-redigerbar">
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Namn *" />
                        <label>Namn *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Titel" />
                        <label>
                          Titel
                          <span style={{ color: '#7a736c' }}>&nbsp;&nbsp;|&nbsp;&nbsp;T.ex.: Vaktmästare</span>
                        </label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Telefon *" />
                        <label>Telefon *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Mobil" />
                        <label>Mobil</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Email *" />
                        <label>Email *</label>
                      </div>
                      <div className="form-group">
                        <select name="" id="" className="form-control">
                          <option defaultValue="">Advelning</option>
                        </select>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>Sektion</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Address *" />
                        <label>Address *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Gods" />
                        <label>Gods</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Box" />
                        <label>Box</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>Sektion</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Address *" />
                        <label>Address *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Gods" />
                        <label>Gods</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Box" />
                        <label>Box</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>Sektion</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Address *" />
                        <label>Address *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Gods" />
                        <label>Gods</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Box" />
                        <label>Box</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>Sektion</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Address *" />
                        <label>Address *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Gods" />
                        <label>Gods</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Sektion" />
                        <label>Sektion</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Address *" />
                        <label>Address *</label>
                      </div>
                      <div className="form-group floating-label floating-label-sm fs-12">
                        <input type="text" className="form-control" placeholder="Gods" />
                        <label>Gods</label>
                      </div>
                    </div>
                    <div className="dynamic-img-footer">
                      <a href="#" className="mt-3 fs-12"><i className="far fa-file-pdf mr-1" /> Visa PDF</a>
                      <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0 pull-right">Spara</a>
                      <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0 mr-1 pull-right">Lägg till Fält</a>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="edit-task-wrap">
                      <div className="edit-task-box">
                        <h5>Redigera uppgifter</h5>
                        <p className="fs-12 mb-1">Ange uppgifter nedan för markerat fält.</p>
                        <p className="fs-12 mb-3">Klicka på spara när du är färdig.</p>
                        <div className="form-group row">
                          <div className="col-md-6">
                            <label htmlFor="" className="fs-12">Type <span className="fs-12 fw-normal ml-1">fältets typ</span></label>
                            <select name="" id="" className="form-control fs-12">
                              <option defaultValue="">Text</option>
                            </select>
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="" className="fs-12">Attribut</label>
                            <select name="" id="" className="form-control fs-12">
                              <option defaultValue="">Obligatoriskt</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="fs-12">Namn <span className="fs-12 fw-normal ml-1">fältnamnet som visas mot användaren</span></label>
                          <input type="text" className="form-control fs-12" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="fs-12">Variabelnamn <span className="fs-12 fw-normal ml-1">(anwänds intemt i mallen)</span></label>
                          <input type="text" className="form-control fs-12" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="fs-12">Exempeltext <span className="fs-12 fw-normal ml-1">förslag på hur fältet kan fyllas i</span></label>
                          <input type="text" className="form-control fs-12" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="" className="fs-12">Väljare <span className="fs-12 fw-normal ml-1">klicka här för att</span></label>
                          <select name="" id="" className="form-control fs-12">
                            <option defaultValue=""></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane tab-pane-address" id="produkt-3-2" role="tabpanel" aria-expanded="false">
                <div className="row mb-4">
                  <div className="col-md-9">
                    <div className="form-group mb-2">
                      <label htmlFor="" className="d-block fs-14 mb-1">Visningsfil <span className="ml-2 fs-12 fw-normal">Fil som används till visning och förhandsgrandskning</span></label>
                      <select className="selectpicker w-100" multiple="multiple" data-max-options="2" title="Välj fil">
                        <option>broschyr3.pdf</option>
                        <option>broschyr2_korr_byran.pdf</option>
                      </select>
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="" className="d-block fs-14 mb-1">Beställningsfil <span className="ml-2 fs-12 fw-normal">Fil som skickas till leverantören vid beställning</span></label>
                      <select className="selectpicker w-100" multiple="multiple" data-max-options="2" title="Välj fil">
                        <option>broschyr3.pdf</option>
                        <option>broschyr2_korr_byran.pdf</option>
                      </select>
                    </div>
                    <div className="form-group mb-2">
                      <label htmlFor="" className="d-block fs-14 mb-1">Filer <span className="ml-2 fs-12 fw-normal">Övriga filer. Dra och släpp filerna om du vill flytta dem</span></label>
                      <div className="form-control filer-list-wrap">
                        <div role="tablist" aria-multiselectable="true" className="card-collapse">
                          <div className="card card-plain">
                            <div className="card-header py-2" role="tab">
                              <a data-toggle="collapse" href="#filer-2-1" aria-expanded="true" aria-controls="filer-2-1" className="fs-12">
                                broschyr3.pdf
                                <i className="nc-icon nc-minimal-down" />
                              </a>
                            </div>
                            <div id="filer-2-1" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                              <div className="card-body py-1">
                                <ul className="filer-list">
                                  <li>
                                    3: broschyr3.pdf <a href="#"><i className="fa fa-trash" /></a>
                                  </li>
                                  <li>
                                    2: broschyr3.pdf <a href="#"><i className="fa fa-trash" /></a>
                                  </li>
                                  <li>
                                    1: broschyr3.pdf <a href="#"><i className="fa fa-trash" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card card-plain">
                            <div className="card-header py-2" role="tab">
                              <a data-toggle="collapse" href="#filer-2-2" aria-expanded="true" aria-controls="filer-2-2" className="fs-12">
                                bilaga2.pdf
                                <i className="nc-icon nc-minimal-down" />
                              </a>
                            </div>
                            <div id="filer-2-2" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                              <div className="card-body py-1">
                                <ul className="filer-list">
                                  <li>
                                    3: broschyr3.pdf <a href="#"><i className="fa fa-trash" /></a>
                                  </li>
                                  <li>
                                    2: broschyr3.pdf <a href="#"><i className="fa fa-trash" /></a>
                                  </li>
                                  <li>
                                    1: broschyr3.pdf <a href="#"><i className="fa fa-trash" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="" className="d-block fs-14 mb-1">Bilagor <span className="ml-2 fs-12 fw-normal">Filer som bifogas när artikeln laddas ned eller beställs</span></label>
                      <select className="selectpicker w-100" multiple="multiple" data-max-options="2" title="Välj fil">
                        <option>broschyr3.pdf</option>
                        <option>broschyr2_korr_byran.pdf</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center mb-1">
                        <div className="col-md-8">
                          <div className="form-control">
                            <span className="btn btn-file btn-sm m-0">
                              <span className="fileinput-new">Välj fil</span>
                              <input type="file" name="..." />
                            </span>
                          </div>
                        </div>
                        <div className="col-md-4 pl-0">
                          <input type="submit" className="btn btn-primary btn-sm btn-normal-f m-0" defaultValue="Ladda up" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <p className="fs-12 mb-0"><em>OBS! Om det finns en fil med samma namn så ersätts denna.</em></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-img-wrap mb-2">
                      <div className="product-img-hover">
                        <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0 mb-2">Ändra miniatyrbild</a>
                      </div>
                      <img src="img/thumb-170.png" alt="" />
                    </div>
                    <div className="bg-ltgray p-2">
                      <p className="fs-10 mb-0">
                        Miniatyrbilden är en förminskad bild som ger en förhandsvisning av artikeln eller filinnehållet.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <p className="fs-12 mb-1"><strong>Instruktioner</strong></p>
                    <p className="fs-12 mb-0">Dra och släpp en fil från din dator till området Visningsfil, Beställningsfil, Filer eller Bilagor. Du kan i efterhand dra och släppa en fil mellan olika områden.</p>
                  </div>
                  <div className="col-md-3">
                    <a href="#" className="btn btn-primary btn-sm d-block m-0 mb-2 w-100">Exportera mall</a>
                    <a href="#" className="btn btn-primary btn-sm d-block m-0 w-100">Spara mall</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane tab-pane-address" id="produkt-3-3" role="tabpanel" aria-expanded="true">
                <div className="card no-shadow bg-ltgray">
                  <div className="card-body p-4">
                    <p className="fs-14 bg-success p-1 mb-0 d-inline">Välj Ingen lista</p>
                  </div>
                </div>
                <div className="card no-shadow bg-ltgray">
                  <div className="card-body p-4">
                    <p className="fs-14 mb-0">Välj Hämta uppgifter från uppladdad Excel-fil</p>
                  </div>
                </div>
                <div className="card no-shadow bg-ltgray">
                  <div className="card-body p-4">
                    <p className="fs-14 mb-1">Välj Test Visa Lista</p>
                    <p className="fs-14 mb-0">Välj Visitkort Visa Lista</p>
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

export default DynamicForm;