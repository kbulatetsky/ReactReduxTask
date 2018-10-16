import React from 'react';
import PropTypes from 'prop-types';

function Error({error}) {
  return (
    <div>
      <p>{error}</p>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string
};

export default Error;

