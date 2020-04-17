import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import NotFound from "./pages/404/not-found.component";
// import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
