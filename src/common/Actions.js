import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({modifyCallback, deleteCallback}) => {
  return (
    <div>
      <input
        type="button"
        value="Edit"
        className="btn btn-success btn-sm mrgn-5"
        onClick={modifyCallback}/>
      <input
        type="button"
        value="Delete"
        className="btn btn-danger btn-sm mrgn-5"
        onClick={deleteCallback}/>
    </div>
  );
}

Actions.propTypes = {
  modifyCallback: PropTypes.func.isRequired,
  deleteCallback: PropTypes.func.isRequired
};

export default Actions;

