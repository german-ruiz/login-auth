import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import logo from "../../assets/logo.svg";
import "../../components/forms/forms.styles.scss";

const Homepage = ({ user }) => {
  return (
    <div className="my-form">
      <div className="column">
        <h2 className="ui teal image header">
          <img src={logo} className="image" alt="coding logo" />
          <div className="content">Hello, {user}</div>
        </h2>
        <div className="ui message">
          <p>Thanks for signing in,</p>
          <p>more info coming soon.</p>
          <Link to="/" onClick={() => auth.signOut()}>
            sign out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
