import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, icon, ...otherProps }) => {
  return (
      <div className="field">
        <div className="ui left icon input">
          <i className={icon}/>
          <input onChange={handleChange} {...otherProps} />
        </div>
      </div>
  );
};

export default FormInput;
