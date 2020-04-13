import React from "react";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import Login from "./pages/login/login.component";
import SignUp from "./pages/sign-up/sign-up.component";
import NotFound from "./pages/404/not-found.component";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
