import React from "react";

import "./customButton.styles.scss";

const CustomButton = ({ children, color, control, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${control} customButton`}
    >
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
