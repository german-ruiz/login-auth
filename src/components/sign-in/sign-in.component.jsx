import React from "react";

import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

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
  };

  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
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
        <button type="submit">
          Sign in
        </button>
      </form>
    );
  }
}

export default SignIn;
