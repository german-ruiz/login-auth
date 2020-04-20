import React from "react";
import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";

import logo from "../../../assets/logo.svg";
import "../forms.styles.scss";
import "./sign-in.styles.scss";

import CustomButton from "../../custom-button/customButton.component";
import {
  auth,
  signInWithGoogle,
  signInWithFacebook,
} from "../../../firebase/firebase.utils";

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

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    // Sign in with firebase
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div className="my-form">
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
              <div className="sign-in-buttons">
                <CustomButton type="submit" control="primary">
                  <i className="address book outline icon" /> Sign In With Email
                </CustomButton>
                <CustomButton
                  type="button"
                  control="google"
                  onClick={signInWithGoogle}
                >
                  <i className="google plus icon" /> Sign In With Google
                </CustomButton>
                <CustomButton
                  type="button"
                  control="facebook"
                  onClick={signInWithFacebook}
                >
                  <i className="facebook icon" /> Sign In With Facebook
                </CustomButton>
              </div>
            </div>
            <div className="ui error message"></div>
          </form>
          <div className="ui message">
            New to us? Sign up with <Link to="/sign-up">email.</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
