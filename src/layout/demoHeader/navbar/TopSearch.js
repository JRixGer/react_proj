import React, { PureComponent } from 'react';

export class TopSearch extends PureComponent {
  render() {
    return (
      <form className="form-header-search mr-2">
        <div className="input-group no-border">
          <input type="text" className="form-control js-form-expand" placeholder="Sök..." />
          <div className="input-group-append">
            <div className="input-group-text">
              <i className="nc-icon nc-zoom-split"></i>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default TopSearch;