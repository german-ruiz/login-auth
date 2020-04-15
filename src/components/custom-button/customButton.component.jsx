import React from "react";

const CustomButton = ({color, text, ...otherProps}) => {
  return (
    <button {...otherProps} className={`ui fluid small ${color} submit button`}>
      {text}
    </button>
  );
};

export default CustomButton;
