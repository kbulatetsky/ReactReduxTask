import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({type, name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0)
  {
    wrapperClass += " " + 'has-error';
  }
  return (
    <div className="col-sm-10 col-md-8 col-lg-5">
      <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input
            type={type}
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default Input;
