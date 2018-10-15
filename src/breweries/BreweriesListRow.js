import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Actions from '../common/Actions';

const BreweriesListRow = ({brewery, modifyCallback, deleteCallback}) => {
  return (
    <tr>
      <td></td>
      <td><a href={brewery.website_url} target="_blank">{brewery.name}</a></td>
      <td>{brewery.brewery_type}</td>
      <td>{brewery.street}</td>
      <td>{brewery.city}</td>
      <td>{brewery.state}</td>
      <td>{brewery.country}</td>
      <td>{brewery.postal_code}</td>
      <td>{brewery.phone}</td>
      <td>
        <Actions
          modifyCallback={() => modifyCallback(brewery.id)}
          deleteCallback={() => deleteCallback(brewery.id)}/>
      </td>
    </tr>
  );
};

BreweriesListRow.propTypes = {
  brewery: PropTypes.object.isRequired,
  modifyCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired
};

export default BreweriesListRow;
