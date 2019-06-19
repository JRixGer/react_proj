import React, { PureComponent } from 'react';

class Stocks extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <div className="tab-pane tab-pane-address p-0" id="produkt-4" role="tabpanel" aria-expanded="false">
        <div className="row">
          <div className="col-md-8">
            <p><strong>Artikelnummer:</strong> {product.id}</p>
            <div className="form-group floating-label floating-label-sm">
              <input type="text" className="form-control" placeholder="Artikel" defaultValue="12 september - Flygblad A5" />
              <label htmlFor="">Artikel</label>
            </div>
            <div className="form-group floating-label floating-label-sm">
              <textarea name="" id="" cols="30" rows="5" defaultValue={product.description} className="form-control fs-12" placeholder="Beskrivning" />
              <label htmlFor="">Beskrivning</label>
            </div>
            <div className="form-group">
              <select name="" id="" className="form-control">
                <option defaultValue="">Kommunal</option>
              </select>
            </div>
            <p><strong>Ansvarig ägare:</strong> Frank Martin Engström</p>
            <div className="form-group floating-label floating-label-sm">
              <input type="text" className="form-control" placeholder="Lagerplats" defaultValue="Pack" />
              <label htmlFor="">Lagerplats</label>
            </div>
            <div className="form-group floating-label floating-label-sm">
              <textarea name="" id="" cols="30" rows="5" className="form-control fs-12" placeholder="Lageranteckning" />
              <label htmlFor="">Lageranteckning</label>
            </div>
            <div>
              <a href="#" className="btn btn-primary">Spara</a>
            </div>
          </div>
          <div className="col-md-4">
            <p><strong>Lagersaldo:</strong> 495</p>
            <div className="form-group floating-label floating-label-sm mb-1">
              <input type="text" className="form-control fs-12" placeholder="Balance" />
              <label htmlFor="">Balance</label>
            </div>
            <div className="text-right mb-2">
              <a href="#" className="mr-1"><i className="fa fa-plus-circle" /></a>
              <a href="#" className="mr-1"><i className="fa fa-minus-circle" /></a>
              <a href="#" className="text-primary"><i className="fa fa-equals" /></a>
            </div>
            <p className="fs-12"><strong>Tillfälligt slut i lager:</strong> <input type="checkbox" readOnly className="ml-2" /></p>
            <p className="fs-12"><strong>Negativt lagersaldo tillåts:</strong> <input type="checkbox" readOnly className="ml-2" /></p>
            <div className="form-group floating-label floating-label-sm mb-2">
              <input type="text" className="form-control fs-12" placeholder="Bevakningspunkt vid antal" defaultValue="50" />
              <label htmlFor="">Bevakningspunkt vid antal</label>
            </div>
            <div className="form-group floating-label floating-label-sm mb-2">
              <input type="text" className="form-control fs-12" placeholder="Bevakningspunkt-mail till" defaultValue="material@kommunal.se" />
              <label htmlFor="">Bevakningspunkt-mail till</label>
            </div>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stocks;