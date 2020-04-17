import React from "react";

import "./customButton.styles.scss";

const CustomButton = ({ children, color, control, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${control} customButton`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
