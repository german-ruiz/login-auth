import React from "react";

import FormInput from "../form-input/form-input.component";

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
    console.log(this.state);
    return (
      <form id="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput
          label="First Name"
          name="firstName"
          type="text"
          value={this.state.firstName}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          label="Last Name"
          name="lastName"
          type="text"
          value={this.state.lastName}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={this.state.email}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={this.state.password}
          handleChange={this.handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={this.state.confirmPassword}
          handleChange={this.handleChange}
          required
        />
        <button type="submit">
          Sign up
        </button>
        <button type="button" onClick={this.handleCancel}>
          Cancel
        </button>
      </form>
    );
  }
}

export default SignUp;
