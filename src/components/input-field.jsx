import React from 'react';

const InputField = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className="input-group has-validation">
        <input
          className="form-control is-invalid"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <div className="invalid-feedback">Field must be filled in</div>
      </div>
    </div>
  );
};

export default InputField;
