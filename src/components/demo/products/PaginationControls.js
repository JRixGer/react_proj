import React, { PureComponent } from 'react';

class PaginationControls extends PureComponent {
  render() {
    return (
      <div className="row product-head-filters align-items-center flex-row">
        <div className="col-md-3" />
        <div className="col-md-9 text-right d-flex flex-row align-items-center justify-content-end">
          <div className="form-group mb-0 mr-3 form-group-artiklar">
            <label htmlFor="" className="d-inline mr-1">Artiklar:</label>
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
            <button type="button" className="btn"><i className="fa fa-th-large" /></button>
            <button type="button" onClick={() => console.log('button clicked!')} className="btn"><i className="fa fa-th-list"></i></button>
            <button type="button" className="btn active"><i className="fa fa-list" /></button>
            <button type="button" className="btn"><i className="fa fa-align-justify" /></button>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginationControls;