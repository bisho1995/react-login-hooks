import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({
  className, value, onChange, type, error, success,...props
}) => (
  <div className="form-input margin-vertical-lg">
    <input className={`padding-xs ${error ? 'input-error' : ''} ${success?'input-success':''} ${className}`} value={value} onChange={onChange} type={type} {...props} />
    {error ? <div className="red-text text-left form-input-message">{error}</div> : null}
  </div>
);

FormInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  error: '',
  className: '',
};

export default FormInput;
