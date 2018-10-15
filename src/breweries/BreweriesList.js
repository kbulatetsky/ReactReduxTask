import React from 'react';
import PropTypes from 'prop-types'

import BreweriesListRow from './BreweriesListRow';

const BreweriesList = ({breweries, modifyCallback, deleteCallback}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Type</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Postal code</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {breweries.map(b =>
            <BreweriesListRow
              key={b.id}
              brewery={b}
              modifyCallback={modifyCallback}
              deleteCallback={deleteCallback} />
            )}
        </tbody>
      </table>
    </div>
  );
};

BreweriesList.propTypes = {
  breweries: PropTypes.array.isRequired,
  modifyCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired
};

export default BreweriesList;
