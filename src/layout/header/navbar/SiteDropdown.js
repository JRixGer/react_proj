/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { PureComponent } from 'react';
import { graphql } from 'react-apollo';
import SITE_QUERY from 'graphql/queries/sites';

export class SiteDropdown extends PureComponent {

  render() {
    console.log('props', this.props);
    const { 
      sitesQuery: { sites }, 
    } = this.props;
    console.log('sites', sites);
    return (
      <div className="dropdown dropdown-workspace">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Välj arbetsyta här
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownWorkspace">
          <form className="w-100">
              <div className="input-group no-border">
                  <input type="text" className="form-control" placeholder="Sök..." />
                  <div className="input-group-append">
                      <div className="input-group-text">
                          <i className="nc-icon nc-zoom-split"></i>
                      </div>
                  </div>
              </div>
          </form>
          <hr />
          { sites && sites.map(site => (
            <a key={site.id} className="dropdown-item" href="#" id="js-show-header-site" data-toggle="tooltip" data-placement="top" title="Site sample description...">{site.name}</a>
          ))}
          
          <hr className="mb-2" />
          <a href="#" className="workspace-edit-link"><i className="fa fa-edit"></i>Edit Sites</a>
        </div>
      </div>
          
    );
  }
}

const SitesWithGraphql = graphql(SITE_QUERY, { name: 'sitesQuery' })(SiteDropdown);

export default SitesWithGraphql;