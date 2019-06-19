import React, { PureComponent } from 'react';

class ProductInformation extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <div className="tab-pane tab-pane-address p-0" id="produkt-2" role="tabpanel" aria-expanded="false">
        <div role="tablist" aria-multiselectable="true" className="card-collapse card-collapse-produktinfo">
          <div className="card card-plain mb-2">
            <div className="card-header py-2" role="tab">
              <a data-toggle="collapse" href="#produktinfo-1" aria-expanded="true" aria-controls="produktinfo-1">
                Artikelinformation
                <i className="nc-icon nc-minimal-down" />
              </a>
            </div>
            <div id="produktinfo-1" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
              <div className="card-body py-3">
                <div className="row">
                  <div className="col-md-9">
                    <p className="fs-12 mb-3">Nedanstående uppgifter behövs för att resursen ska publiceras.</p>
                    <form className="form-horizontal">
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Namn</strong></p>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group floating-label floating-label-xs">
                            <input type="text" className="form-control m-0" placeholder="Namn" defaultValue={product.name} /> 
                            <label className="mb-0">Namn</label>
                          </div>
                        </div>
                        <div className="col-md-2 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Artikelnummer</strong></p>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group floating-label floating-label-xs">
                            <input type="text" className="form-control m-0" placeholder="Artikelnummer" defaultValue={product.id} /> 
                            <label className="mb-0">Artikelnummer</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Beskrivning</strong></p>
                        </div>
                        <div className="col-md-9">
                          <div className="form-group floating-label floating-label-xs">
                            <textarea name="" id="" rows="4" className="form-control fs-12" defaultValue={product.description} placeholder="Beskrivning" />
                            <label className="mb-0">Beskrivning</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Detaljerad beskrivning</strong></p>
                        </div>
                        <div className="col-md-9">
                          <div className="form-group floating-label floating-label-xs">
                            <textarea name="" id="" rows="2" className="form-control fs-12" placeholder="Detaljerad beskrivning" />
                            <label className="mb-0">Detaljerad beskrivning</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Format<sup>*</sup></strong></p>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group floating-label floating-label-xs">
                            <input type="text" className="form-control m-0" placeholder="Format" defaultValue="A5" /> 
                            <label className="mb-0">Format</label>
                          </div>
                          <div className="form-check form-check-sm mb-2">
                            <label className="form-check-label fs-10 pl-4">
                              <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Visa format vid beställning
                              <span className="form-check-sign" /> 
                            </label>
                          </div>
                        </div>
                        <div className="col-md-2 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Beställningsenhet</strong></p>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group floating-label floating-label-xs">
                            <input type="text" className="form-control m-0" placeholder="Beställningsenhet" defaultValue="st." /> 
                            <label className="mb-0">Beställningsenhet</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Material</strong></p>
                        </div>
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-6 pr-0">
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Material" defaultValue="Proffisilk 130g" /> 
                                <label className="mb-0">Material</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <select name="" id="" className="form-control form-control-xs">
                                <option defaultValue="-1">Ingen lista</option>
                                <option defaultValue="6">Avdelning</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Sidomfång</strong></p>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-6 pr-0">
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Sidomfång" defaultValue="" /> 
                                <label className="mb-0">Sidomfång</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <span className="fs-10"><em>(frivilligt)</em></span>
                            </div>
                          </div>
                          <div className="form-check form-check-sm mb-2">
                            <label className="form-check-label fs-10 pl-4">
                              <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Visa format vid beställning
                              <span className="form-check-sign" />
                            </label>
                          </div>
                        </div>
                        <div className="col-md-1 pr-0 text-right">
                          <p className="fs-10 mb-0"><strong>Vikt</strong></p>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-6 pr-0">
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Vikt" defaultValue="32,43" /> 
                                <label className="mb-0">Vikt</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <span className="fs-10">gram</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 pr-0 text-right" />
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-6">
                              <p className="fs-10 mb-1"><strong>Metadata</strong></p>
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Datum/tid" defaultValue="2012-06-15" /> 
                                <label className="mb-0">Datum/tid</label>
                              </div>
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Plats" defaultValue="" /> 
                                <label className="mb-0">Plats</label>
                              </div>
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Modell" defaultValue="" /> 
                                <label className="mb-0">Modell</label>
                              </div>
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Yrke" defaultValue="" /> 
                                <label className="mb-0">Yrke</label>
                              </div>
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Ansvarig" defaultValue="" /> 
                                <label className="mb-0">Ansvarig</label>
                              </div>
                              <div className="form-group floating-label floating-label-xs">
                                <input type="text" className="form-control m-0" placeholder="Bildnummer" defaultValue="" /> 
                                <label className="mb-0">Bildnummer</label>
                              </div>
                              <div className="form-check form-check-sm">
                                <label className="form-check-label fs-10 pl-4">
                                  <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Friköpt
                                  <span className="form-check-sign" />
                                </label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <p className="fs-10 mb-1"><strong>Taggning</strong></p>
                              <div className="form-control p-0">
                                <input type="text" defaultValue="framifran,funktionshinder,brukare,hushallsarbete,inomhus,kvinna,persass,personligassistent,aldre" className="tagsinput" data-role="tagsinput" data-color="primary" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-3">
                    <div className="product-img-wrap mb-2">
                      <div className="product-img-hover">
                        <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0 mb-2">Ändra miniatyrbild</a>
                      </div>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="bg-ltgray p-2">
                      <p className="fs-10 mb-0">
                        Miniatyrbilden är en förminskad bild som ger en förhandsvisning av artikeln eller filinnehållet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-plain mb-2">
            <div className="card-header py-2" role="tab">
              <a data-toggle="collapse" href="#produktinfo-2" aria-expanded="true" aria-controls="produktinfo-2">
                Pris
                <i className="nc-icon nc-minimal-down" />
              </a>
            </div>
            <div id="produktinfo-2" className="collapse show" role="tabpanel" aria-labelledby="">
              <div className="card-body py-3">
                <p className="fs-12 mb-2">Ange antal och pris för stafflad prislista.</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group row">
                      <div className="col-md-6">
                        <label htmlFor="" className="fs-10 d-block">Startkostnad:</label>
                        <input type="text" className="form-control form-control-sm d-inline-block w-75" />
                        <span className="fs-12 ml-2">kr</span>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="" className="fs-10 d-block">Momsats:</label>
                        <select name="" id="" className="form-control form-control-sm">
                          <option defaultValue="">25%</option>
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="" className="fs-10 d-block">Abtak:</label>
                          <input type="text" className="form-control form-control-sm" defaultValue="1" />
                        </div>
                        <div>
                          <a href="#" className="btn btn-primary btn-sm btn-normal-f m-0">Lägg till</a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="" className="fs-10 d-block">Pris:</label>
                          <input type="text" className="form-control form-control-sm" defaultValue="0,00" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row pt-3">
                      <div className="col-md-5">
                        <div className="form-check form-check-sm mb-1">
                          <label className="form-check-label fs-10 pl-4">
                            <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Visa pris vid beställning
                            <span className="form-check-sign" /> 
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="form-check form-check-sm mb-2">
                          <label className="form-check-label fs-10 pl-4">
                            <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Tillåt fritt valt antal
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-plain mb-2">
            <div className="card-header py-2" role="tab">
              <a data-toggle="collapse" href="#produktinfo-3" aria-expanded="true" aria-controls="produktinfo-3">
                Filer
                <i className="nc-icon nc-minimal-down" />
              </a>
            </div>
            <div id="produktinfo-3" className="collapse show" role="tabpanel" aria-labelledby="">
              <div className="card-body py-3">
                <div className="row">
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
                              <a data-toggle="collapse" href="#filer-1" aria-expanded="true" aria-controls="filer-1" className="fs-12">
                              broschyr3.pdf
                              <i className="nc-icon nc-minimal-down" />
                              </a>
                            </div>
                            <div id="filer-1" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
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
                              <a data-toggle="collapse" href="#filer-2" aria-expanded="true" aria-controls="filer-2" className="fs-12">
                                bilaga2.pdf
                                <i className="nc-icon nc-minimal-down" />
                              </a>
                            </div>
                            <div id="filer-2" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
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
                    <p className="fs-12 mb-1"><strong>Instruktioner</strong></p>
                    <p className="fs-12 mb-5">Dra och släpp en fil från din dator till området Visningsfil, Beställningsfil, Filer eller Bilagor. Du kan i efterhand dra och släppa en fil mellan olika områden.</p>
                    <a href="#" className="btn btn-primary btn-sm d-block m-0 mb-2 w-100">Exportera mall</a>
                    <a href="#" className="btn btn-primary btn-sm d-block m-0 w-100">Spara mall</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-plain">
            <div className="card-header py-2" role="tab">
              <a data-toggle="collapse" href="#produktinfo-4" aria-expanded="true" aria-controls="produktinfo-4">
                Leverans
                <i className="nc-icon nc-minimal-down" />
              </a>
            </div>
            <div id="produktinfo-4" className="collapse show" role="tabpanel" aria-labelledby="">
              <div className="card-body py-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row align-items-center no-gutters mb-2">
                      <div className="col-md-5">
                        <div className="form-check form-check-sm mb-0">
                          <label className="form-check-label fs-12 pl-4">
                            <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Beställningsbar artikel
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3 pl-0">
                        <div className="form-group mb-0">
                          <select name="" id="" className="form-control form-control-sm fs-12">
                            <option defaultValue="">Kommunal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="pl-4">
                      <p className="fs-12 mb-1">skicka beställningen till följande leverantör då användaren beställer artikeln.</p>
                      <div className="form-check form-check-sm mb-1">
                        <label className="form-check-label fs-12 pl-4">
                          <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Kräv attestering vid beställning
                          <span className="form-check-sign" />
                        </label>
                      </div>
                      <p className="fs-12 pl-4">innan artikeln skickas till leverantören så måste artikeln attesteras. Obs! Gäller endast beställningsbara artiklar.</p>
                    </div>
                    <hr />
                    <div className="row align-items-center no-gutters mb-1">
                      <div className="col-md-12">
                        <div className="form-check form-check-sm mb-0">
                          <label className="form-check-label fs-12 pl-4">
                            <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Nedladdningsbar artikel
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="pl-4">
                      <p className="fs-12 mb-1">användaren kan ladda ned artikeln utan att gå via varukorgen.</p>
                    </div>
                    <hr />
                    <div className="row align-items-center no-gutters mb-2">
                      <div className="col-md-5">
                        <div className="form-check form-check-sm mb-0">
                          <label className="form-check-label fs-12 pl-4">
                            <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Bokningsbar artikel
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </div>
                      <div className="col-md-5 pl-0">
                        <div className="form-group mb-0">
                          <label htmlFor="">antal dagar</label>
                          <input type="text" className="form-control form-control-sm fs-12 w-25 d-inline-block ml-1" defaultValue="5" />
                        </div>
                      </div>
                    </div>
                    <div className="pl-4">
                      <p className="fs-12 mb-1">användaren kan boka artikeln under angiven tidsperiod, t.ex. till en mässa.</p>
                      <div className="form-check form-check-sm mb-1">
                        <label className="form-check-label fs-12 pl-4">
                          <input className="form-check-input" type="checkbox" readOnly defaultValue="" /> Tillåt fritt val av dagar
                          <span className="form-check-sign" />
                        </label>
                      </div>
                      <p className="fs-12 pl-4 mb-0">Antal dagar ovan är minimum.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="fs-14 mb-1">Produktionsanteckningar</p>
                    <div className="form-group floating-label floating-label-sm">
                      <input type="text" className="form-control w-50" placeholder="Meddelande till produktionen" />
                      <label htmlFor="">Meddelande till produktionen</label>
                    </div>
                    <div className="form-group floating-label floating-label-sm">
                      <textarea name="" id="" cols="30" rows="4" className="form-control fs-12 w-50" placeholder="Andra egenskaper, t.ex. färg mm." />
                      <label htmlFor="">Andra egenskaper, t.ex. färg mm.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 text-right">
            <a href="#" className="btn btn-primary m-0">Spara</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductInformation;