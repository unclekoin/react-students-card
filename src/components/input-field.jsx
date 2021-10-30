import React from 'react';

const InputField = ({ label, name, type = 'text', value, error, onChange, max, min }) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className="input-group has-validation">
        <input
          className={`form-control is-${error ? 'invalid' : 'valid'}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default InputField;
