import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...rest }) => {
  
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label ? (
        // If input field is not empty, then add classname 'shrink' to label
        <label className={`${rest.value.length ? 'shrink' : ''} form-input-label `} name={label}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
