import React from "react";

import SignIn from "../../components/forms/sign-in/sign-in.component";

import "./sign-in-page.styles.scss";

const SignInPage = ({setToLoading}) => {
  return <SignIn setToLoading={setToLoading} />;
};

export default SignInPage;
