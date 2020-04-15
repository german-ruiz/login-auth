import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../custom-button/customButton.component";

import logo from "../../../logo.svg";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
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

    // Check passwords match

    // Submit to firebase

    // If successful redirect to homepage
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  handleCancel = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  render() {
    return (
      <div className="sign-in-sign-up-form">
        <div className="column">
          <h2 className="ui teal image header">
            <img src={logo} className="image" alt="coding logo" />
            <div className="content">Create your account</div>
          </h2>
          <form className="ui large form" onSubmit={this.handleSubmit}>
            <div className="ui stacked segment">
              <FormInput
                icon="user icon"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                icon="user icon"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                handleChange={this.handleChange}
                required
              />
              <FormInput
                icon="user icon"
                name="email"
                type="email"
                placeholder="Email"
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
              <FormInput
                icon="lock icon"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                handleChange={this.handleChange}
                required
              />
              <div className="buttons-wrapper">
                <span className="buttons">
                  <CustomButton
                    text="Create" 
                    type="submit"
                    color="teal"
                  />
                  <CustomButton
                    text="Cancel"
                    type="button"
                    color="grey"
                    onClick={this.handleCancel}
                  />
                </span>
              </div>
            </div>
            <div className="ui error message"></div>
          </form>
          <div className="ui message">
            Already have an account? <Link to="/sign-in">Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
