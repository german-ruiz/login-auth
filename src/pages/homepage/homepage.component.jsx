import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import logo from "../../assets/logo.svg";
import "../../components/forms/forms.styles.scss";
import "./homepage.styles.scss";

const Homepage = ({ displayName, photoURL }) => {
  return (
    <div className="my-form">
      <div className="column">
        <img
          src={photoURL || logo}
          className="image current-user-image"
          alt="current user"
        />
        <h2 className="ui teal image header">
          <div className="content">Hello, {displayName}</div>
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
