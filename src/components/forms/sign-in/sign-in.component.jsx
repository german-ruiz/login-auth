import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";

import logo from "../../../logo.svg";
import "../forms.styles.scss";
import "./sign-in.styles.scss";

import CustomButton from "../../custom-button/customButton.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Sign in with firebase

    // if successful, redirect to homepage
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="sign-in-sign-up-form">
        <div className="column">
          <h2 className="ui teal image header">
            <img src={logo} className="image" alt="coding logo" />
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <FormInput
                icon="user icon"
                name="email"
                type="email"
                placeholder="E-mail address"
                value={this.state.email}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                icon="lock icon"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                handleChange={this.handleChange}
                required
              />
              <div className="sign-in-button">
                <CustomButton type="submit" text="Sign In" color="teal" />
              </div>
            </div>
            <div className="ui error message"></div>
          </form>
          <div className="ui message">
            New to us? <Link to="/sign-up">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
