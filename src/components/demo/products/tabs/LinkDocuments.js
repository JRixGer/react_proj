import React, { PureComponent } from 'react';

class LinkDocuments extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <div className="tab-pane tab-pane-address p-0 active" id="produkt-1" role="tabpanel" aria-expanded="true">
        <div className="row">
          <div className="col-12">
            <h5 className="mb-2">{product.name}</h5>
            <p className="fs-12 mb-2">Här kan du länka dokument, t.ex.offerter eller avtal, som är relaterade till artikeln. Det gör det enkelt för andra användare att hitta dokument som hör samman med artikeln.</p>
            <p className="fs-12 mb-4">Klicka på ”Visa” till höger om dokumentnamnet för att förhandsgrandska dokumentet, eller ”Ladda ner” för att hämta dokumentet. Klicka på Lägg till ny rubrik för att skapa en rubrik dit du länkar dokument.</p>
            <div className="row mb-2">
              <div className="col-md-6">
                <h5 className="mb-2">Offerter <a href="#" className="btn btn-primary btn-sm ml-2 mt-0 mb-0"><i className="fa fa-plus-circle mr-1"></i> Lägg till dokument</a></h5>
                <div>
                  <select name="" id="" className="form-control form-control-sm fs-12 mb-2 mr-2 w-75 d-inline-block">
                    <option defaultValue="">Offert fotografering Bildbyrån AB.pdf</option>
                  </select>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Visa"><i className="fa fa-eye"></i></a>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Ladda ner"><i className="fa fa-download"></i></a>
                  <a href="#" className="fs-12 mr-2 text-danger" data-toggle="tooltip" data-placement="top" title="Radera"><i className="fa fa-trash"></i></a>
                </div>
                <div>
                  <select name="" id="" className="form-control form-control-sm fs-12 mb-2 mr-2 w-75 d-inline-block">
                    <option defaultValue="">Offert bildredigering ImageLab AB.pdf</option>
                  </select>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Visa"><i className="fa fa-eye"></i></a>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Ladda ner"><i className="fa fa-download"></i></a>
                  <a href="#" className="fs-12 mr-2 text-danger" data-toggle="tooltip" data-placement="top" title="Radera"><i className="fa fa-trash"></i></a>
                </div>
              </div>
              <div className="col-md-6">
                <h5 className="mb-2">Avtal <a href="#" className="btn btn-primary btn-sm ml-2 mt-0 mb-0"><i className="fa fa-plus-circle mr-1"></i> Lägg till dokument</a></h5>
                <div>
                  <select name="" id="" className="form-control form-control-sm fs-12 mb-2 mr-2 w-75 d-inline-block">
                    <option defaultValue="">Avtal uppdragsfotografering ifyllbar pdf</option>
                  </select>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Visa"><i className="fa fa-eye"></i></a>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Ladda ner"><i className="fa fa-download"></i></a>
                  <a href="#" className="fs-12 mr-2 text-danger" data-toggle="tooltip" data-placement="top" title="Radera"><i className="fa fa-trash"></i></a>
                </div>
                <div>
                  <select name="" id="" className="form-control form-control-sm fs-12 mb-2 mr-2 w-75 d-inline-block">
                    <option defaultValue="">Avtal fotografering pdf</option>
                  </select>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Visa"><i className="fa fa-eye"></i></a>
                  <a href="#" className="fs-12 mr-2" data-toggle="tooltip" data-placement="top" title="Ladda ner"><i className="fa fa-download"></i></a>
                  <a href="#" className="fs-12 mr-2 text-danger" data-toggle="tooltip" data-placement="top" title="Radera"><i className="fa fa-trash"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a href="#" className="btn btn-success btn-sm"><i className="fa fa-plus-circle mr-2"></i> Lägg till ny rubrik</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkDocuments;