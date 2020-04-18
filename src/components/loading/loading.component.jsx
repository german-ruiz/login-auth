import React from "react";

import logo from "../../assets/logo.svg"

import "../forms/forms.styles.scss";

import "./loading.styles.scss";

const Loading = () => {
  return (
    <div className="my-form">
      <div className="column">
        <h2 className="ui teal image header">
          <img src={logo} className="image" alt="coding logo" />
          <div className="content">Loading...</div>
        </h2>
      </div>
    </div>
  )
};

export default Loading;
