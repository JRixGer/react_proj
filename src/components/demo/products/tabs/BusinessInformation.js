import React, { PureComponent } from 'react';

class BusinessInformation extends PureComponent {
  render() {
    return (
      <div className="tab-pane tab-pane-address p-0" id="produkt-6" role="tabpanel" aria-expanded="false">
        <div className="row">
          <div className="col-md-6">
            <div id="" className="accordion-default card-collapse pb-0" role="tablist" aria-multiselectable="true">
              <div className="card card-plain">
                <div className="card-header" role="tab" id="headingOne">
                  <a className="collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Kommunal
                    <i className="nc-icon nc-minimal-down" />
                  </a>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="">
                  <div className="card-body">
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Beställare" defaultValue="Peter Hammarin" /> 
                      <label className="mb-0">Beställare</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Epost" defaultValue="peter.hammarin@kommunal.se" /> 
                      <label className="mb-0">Epost</label>
                    </div>
                    <div className="form-group">
                      <select name="" id="" className="form-control form-control-xs">
                        <option defaultValue="" disabled>Enhet</option>
                        <option defaultValue="ADMN – Administrativa enheten">ADMN – Administrativa enheten</option>
                        <option defaultValue="ALU – Arbetslivsutvecklingsenheten">ALU – Arbetslivsutvecklingsenheten</option>
                        <option defaultValue="ARKO – Enheten för arbetsrätt och kollektivavtal">ARKO – Enheten för arbetsrätt och kollektivavtal</option>
                        <option defaultValue="EK – Ekonomienheten">EK – Ekonomienheten</option>
                        <option defaultValue="IT – It-enheten">IT – It-enheten</option>
                        <option defaultValue="KANS – Kanslistaben">KANS – Kanslistaben</option>
                        <option defaultValue="KOMM – Kommunikationsenheten">KOMM – Kommunikationsenheten</option>
                        <option defaultValue="ORG - Organisationsutvecklingsenheten">ORG - Organisationsutvecklingsenheten</option>
                        <option defaultValue="PERS - Personalenheten">PERS - Personalenheten</option>
                        <option defaultValue="SERV – Serviceenheten">SERV – Serviceenheten</option>
                        <option defaultValue="UTRD - Utredningsenheten">UTRD - Utredningsenheten</option>
                      </select>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Projektledare" defaultValue="Madeleine Bengtsson" /> 
                      <label className="mb-0">Projektledare</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="PLs epost" defaultValue="" /> 
                      <label className="mb-0">PLs epost</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Orderdatum" defaultValue="" /> 
                      <label className="mb-0">Orderdatum</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Leveransdatum" defaultValue="" /> 
                      <label className="mb-0">Leveransdatum</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-plain">
                <div className="card-header" role="tab" id="headingTwo">
                  <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Byrå
                    <i className="nc-icon nc-minimal-down" />  
                  </a>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="">
                  <div className="card-body">
                    <div className="form-group">
                      <select name="" id="" className="form-control form-control-xs">
                        <option defaultValue="" disabled="">Byrå</option>
                        <option defaultValue="AHA Production">AHA Production</option>
                        <option defaultValue="BMB Media">BMB Media</option>
                        <option defaultValue="BOB Reklambyrå">BOB Reklambyrå</option>
                        <option defaultValue="Cellsynt">Cellsynt</option>
                        <option defaultValue="Comintelli">Comintelli</option>
                        <option defaultValue="Cybercom">Cybercom</option>
                        <option defaultValue="Flash fwd">Flash fwd</option>
                        <option defaultValue="FM Reklam">FM Reklam</option>
                        <option defaultValue="Graphera">Graphera</option>
                        <option defaultValue="Ideal Kommunikation">Ideal Kommunikation</option>
                        <option defaultValue="Infopaq">Infopaq</option>
                        <option defaultValue="Karlavagnen">Karlavagnen</option>
                        <option defaultValue="Katarina Strömgård">Katarina Strömgård</option>
                        <option defaultValue="Kommunal inhouse">Kommunal inhouse</option>
                        <option defaultValue="Hemma Annonsbyrå">Hemma Annonsbyrå</option>
                        <option defaultValue="Novus">Novus</option>
                        <option defaultValue="Maria Larkman">Maria Larkman</option>
                        <option defaultValue="PIR">PIR</option>
                        <option defaultValue="PGM">PGM</option>
                        <option defaultValue="Reformact">Reformact</option>
                        <option defaultValue="Reformklubben">Reformklubben</option>
                        <option defaultValue="Relatera produktion">Relatera produktion</option>
                        <option defaultValue="Robert Nyberg">Robert Nyberg</option>
                        <option defaultValue="Rulermailer">Rulermailer</option>
                        <option defaultValue="SIS">SIS</option>
                        <option defaultValue="Semantix">Semantix</option>
                        <option defaultValue="Starck Design">Starck Design</option>
                        <option defaultValue="Traffic">Traffic</option>
                        <option defaultValue="Typer och original">Typer och original</option>
                        <option defaultValue="Volontaire">Volontaire</option>
                      </select>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Kontakt" defaultValue="Sara P Ruyter" /> 
                      <label className="mb-0">Kontakt</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Projektnamn" defaultValue="10 Rättigheter för de i äldreomsorgen" /> 
                      <label className="mb-0">Projektnamn</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Offererat pris" defaultValue="" /> 
                      <label className="mb-0">Offererat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Fakturerat pris" defaultValue="" /> 
                      <label className="mb-0">Fakturerat pris</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-plain">
                <div className="card-header" role="tab" id="headingThree">
                  <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Fotograf
                    <i className="nc-icon nc-minimal-down" /> 
                  </a>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="">
                  <div className="card-body">
                    <div className="form-group">
                      <select name="" id="" className="form-control form-control-xs">
                        <option defaultValue="" disabled="">Fotograf</option>
                        <option defaultValue="Per Bergbom, Göteborg">Per Bergbom, Göteborg</option>
                        <option defaultValue="Ann Ek">Ann Ek</option>
                        <option defaultValue="Lennart Jönsson, Luleå">Lennart Jönsson, Luleå</option>
                        <option defaultValue="Lina Karna Kippel, Tomelilla">Lina Karna Kippel, Tomelilla</option>
                        <option defaultValue="Kari Kohvakka">Kari Kohvakka</option>
                        <option defaultValue="Magnus Lindkvist, Skellefteå">Magnus Lindkvist, Skellefteå</option>
                        <option defaultValue="Denny Lorentzen">Denny Lorentzen</option>
                        <option defaultValue="Magnus Mikaelsson, Östersund">Magnus Mikaelsson, Östersund</option>
                        <option defaultValue="Anna Norrby">Anna Norrby</option>
                        <option defaultValue="Mia Olofsson">Mia Olofsson</option>
                        <option defaultValue="Gunno Rask, Östersund">Gunno Rask, Östersund</option>
                        <option defaultValue="Märit Rönnols">Märit Rönnols</option>
                        <option defaultValue="Christian Saltas">Christian Saltas</option>
                        <option defaultValue="Niclas Sandberg, Norrköping">Niclas Sandberg, Norrköping</option>
                        <option defaultValue="Fredrik Sandin Carlsson">Fredrik Sandin Carlsson</option>
                      </select>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Offererat pris" defaultValue="" /> 
                      <label className="mb-0">Offererat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Fakturerat pris" defaultValue="" /> 
                      <label className="mb-0">Fakturerat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <textarea name="" id="" rows="2" className="form-control fs-12" placeholder="Beskrivning" />
                      <label className="mb-0">Beskrivning</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-plain mb-0">
                <div className="card-header" role="tab" id="headingFour">
                  <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Copywriter
                    <i className="nc-icon nc-minimal-down" />
                  </a>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="">
                  <div className="card-body">
                    <div className="form-group">
                      <select name="" id="" className="form-control form-control-xs">
                        <option defaultValue="" disabled="">Copywriter</option>
                        <option defaultValue="Gösta Elmquist">Gösta Elmquist</option>
                        <option defaultValue="Helena Lindh, Östersund">Helena Lindh, Östersund</option>
                        <option defaultValue="Lina Karna Kippel, Tomelilla">Lina Karna Kippel, Tomelilla</option>
                        <option defaultValue="Lalla Lindström">Lalla Lindström</option>
                        <option defaultValue="Anna Norrby">Anna Norrby</option>
                        <option defaultValue="Märit Rönnols">Märit Rönnols</option>
                        <option defaultValue="Johanna Stjerna">Johanna Stjerna</option>
                      </select>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Offererat pris" defaultValue="" /> 
                      <label className="mb-0">Offererat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Fakturerat pris" defaultValue="" /> 
                      <label className="mb-0">Fakturerat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <textarea name="" id="" rows="2" className="form-control fs-12" placeholder="Beskrivning" />
                      <label className="mb-0">Beskrivning</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="" className="accordion-default card-collapse pb-0" role="tablist" aria-multiselectable="true">
              <div className="card card-plain">
                <div className="card-header" role="tab" id="headingFive">
                  <a className="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Tryckeri
                    <i className="nc-icon nc-minimal-down" />
                  </a>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="">
                  <div className="card-body">
                    <div className="form-group">
                      <select name="" id="" className="form-control form-control-xs">
                        <option defaultValue="" disabled="">Tryckeri</option>
                        <option defaultValue="AGE">AGE</option>
                        <option defaultValue="Bilda förlag">Bilda förlag</option>
                        <option defaultValue="Billes tryckeri">Billes tryckeri</option>
                        <option defaultValue="Borkyrka offset">Borkyrka offset</option>
                        <option defaultValue="Cicero">Cicero</option>
                        <option defaultValue="Danagårdsgrafiska">Danagårdsgrafiska</option>
                        <option defaultValue="Dekorateljen">Dekorateljen</option>
                        <option defaultValue="Ekmans">Ekmans</option>
                        <option defaultValue="Eskilstryckeri">Eskilstryckeri</option>
                        <option defaultValue="EO Grafiska">EO Grafiska</option>
                        <option defaultValue="Flaggfabriken ">Flaggfabriken </option>
                        <option defaultValue="FM Reklam">FM Reklam</option>
                        <option defaultValue="Halmstadstryckeri">Halmstadstryckeri</option>
                        <option defaultValue="Kommunal Vaktmästeri">Kommunal Vaktmästeri</option>
                        <option defaultValue="Kopiecenter">Kopiecenter</option>
                        <option defaultValue="PGM">PGM</option>
                        <option defaultValue="Quebecor/Sörmlands grafiska">Quebecor/Sörmlands grafiska</option>
                        <option defaultValue="Rolf tryckeri">Rolf tryckeri</option>
                        <option defaultValue="RoosNeon">RoosNeon</option>
                        <option defaultValue="Exakta Printing AB">Exakta Printing AB</option>
                        <option defaultValue="Skylttorget AB">Skylttorget AB</option>
                        <option defaultValue="Strokirk Landströmstryckeri">Strokirk Landströmstryckeri</option>
                        <option defaultValue="Strålin och Perssons tryckeri">Strålin och Perssons tryckeri</option>
                        <option defaultValue="Tabergstryckeri">Tabergstryckeri</option>
                      </select>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Kontakt" defaultValue="Ewa Stenbeck" /> 
                      <label className="mb-0">Kontakt</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Offertnummer" defaultValue="mail 100224" /> 
                      <label className="mb-0">Offertnummer</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Offererat pris" defaultValue="9800" /> 
                      <label className="mb-0">Offererat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Frakt" defaultValue="0" /> 
                      <label className="mb-0">Frakt</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Vikt" defaultValue="32,43g" /> 
                      <label className="mb-0">Vikt</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Fakturerat pris" defaultValue="9800" /> 
                      <label className="mb-0">Fakturerat pris</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <textarea name="" id="" rows="2" className="form-control fs-12" placeholder="Leveransadress" />
                      <label className="mb-0">Leveransadress</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Sidomfång" defaultValue="" /> 
                      <label className="mb-0">Sidomfång</label>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-4 pr-0">
                          <select name="" id="" className="form-control form-control-xs">
                            <option defaultValue="0">Övriga</option>
                            <option defaultValue="1">A3</option>
                            <option defaultValue="2">A4</option>
                            <option defaultValue="3">A5</option>
                            <option defaultValue="4">A6</option>
                          </select>
                        </div>
                        <div className="col-md-4 pr-0">
                          <input type="text" className="form-control form-control-xs" />
                        </div>
                        <div className="col-md-4">
                          <input type="text" className="form-control form-control-xs" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6 pr-0">
                          <div className="floating-label floating-label-xs">
                            <input type="text" className="form-control m-0" placeholder="Omslag" defaultValue="Proffisilk" /> 
                            <label className="mb-0">Omslag</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-xs m-0" placeholder="" defaultValue="130g" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6 pr-0">
                          <div className="floating-label floating-label-xs">
                            <input type="text" className="form-control m-0" placeholder="Inlaga" defaultValue="Proffisilk" /> 
                            <label className="mb-0">Inlaga</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control form-control-xs m-0" placeholder="" defaultValue="130g" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Färg omslag" defaultValue="4+4" /> 
                      <label className="mb-0">Färg omslag</label>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <input type="text" className="form-control m-0" placeholder="Färg omslag" defaultValue="4+4" /> 
                      <label className="mb-0">Färg inlaga</label>
                    </div>
                    <div className="form-group">
                      <select name="" id="" className="form-control form-control-xs">
                        <option defaultValue="" disabled="disabled">Efterbehandling</option>
                        <option defaultValue="Klammerhäftning">Klammerhäftning</option>
                        <option defaultValue="Stansning">Stansning</option>
                        <option defaultValue="Bigning">Bigning</option>
                        <option defaultValue="Falsning">Falsning</option>
                        <option defaultValue="Priohålning">Priohålning</option>
                        <option defaultValue="Limbindning">Limbindning</option>
                        <option defaultValue="Wire-o">Wire-o</option>
                        <option defaultValue="Limblock">Limblock</option>
                        <option defaultValue="Perforering">Perforering</option>
                        <option defaultValue="Special">Special</option>
                      </select>
                    </div>
                    <div className="form-group floating-label floating-label-xs">
                      <textarea name="" id="" rows="2" className="form-control fs-12" placeholder="Övrigt" />
                      <label className="mb-0">Övrigt</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <a href="#" className="btn btn-primary">Spara</a>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default BusinessInformation;