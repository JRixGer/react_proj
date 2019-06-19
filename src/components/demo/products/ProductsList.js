import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ModalDialog from 'components/common/dialogs/ModalDialog';

import PaginationControls from './PaginationControls';
import ProductEdit from '../ProductEdit';

class ProductsList extends PureComponent {

  handleEdit = product => {
    ModalDialog.show({
      component: ProductEdit,
      title: 'Redigera',
      passProps: {
        product
      }
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div className="card card-category-items">
        <div className="card-header pt-0">
          <PaginationControls />
        </div>
        <div className="card-body">
          <div className="table-responsive-md">
            <table className="table table-documents tooltip-img-wrap">
              <thead>
                <tr>
                  <th />
                  <th colSpan="2">Namn</th>
                  <th>Beskrivning</th>
                  <th className="text-center">Version</th>
                  <th>Ändrad av</th>
                  <th>Ändrad</th>
                  <th>Uppladdad av</th>
                  <th>Uppladdning</th>
                  <th>Storlek</th>
                  <th className="text-center">Lås</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => {
                  const lockCheck = product.lock ? 'form-check-primary' : '';
                  const lockRemove = product.lock ? 'text-primary' : '';
                  return (
                    <tr key={product.id}>
                      <td className="text-center">
                        <div className={`form-check form-check-xs ${lockCheck}`}>
                          <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" defaultChecked />
                            <span className="form-check-sign" />
                          </label>
                        </div>
                      </td>
                      <td className="doc-type doc-type-thumbnail">
                        <img
                          src={product.image}
                          className="tooltip-img"
                          alt=""
                          data-toggle="tooltip"
                          data-html="true"
                          data-container=".tooltip-img-wrap-lg"
                          title={`<img src='${product.image}' class='tooltip-hover-img' />`}
                          data-placement="right"
                        />
                      </td>
                      <td>
                        <p className="doc-name">{product.name}</p>
                      </td>
                      <td>{product.description}</td>
                      <td className="text-center">{product.version}</td>
                      <td>{product.createdBy}</td>
                      <td>{product.createdAt}</td>
                      <td>{product.uploadedBy}</td>
                      <td>{product.uploadedAt}</td>
                      <td>{product.storage}</td>
                      <td className="doc-action text-center">
                        <a href="#" onClick={()=> this.handleEdit(product)}>
                          <i className="fa fa-edit mr-1" />
                        </a>
                        <a href="#" className={lockRemove}>
                          <i className="fas fa-unlock" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.account.products,
});

export default connect(mapStateToProps)(ProductsList);