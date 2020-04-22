import React from "react";

import SignUp from "../../components/forms/sign-up/sign-up.component";

import "./sign-up-page.styles.scss";

const SignUpPage = ({setToLoading}) => {
  return <SignUp setToLoading={setToLoading}/>;
};

export default SignUpPage;
