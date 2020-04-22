import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
import NotFound from "./pages/404/not-found.component";
// import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Loading from "./components/loading/loading.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };

    this.setToLoading = this.setToLoading.bind(this);
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // Create profile in db and returns userRef
        const userRef = createUserProfileDocument(userAuth);

        // Add user to state
        (await userRef).onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });

      // add 200ms timeout
      setTimeout(() => this.setState({ loading: false }), 200);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  setToLoading() {
    this.setState({ loading: true }, () => console.log(this.state));
  }

  render() {
    const user = this.state.currentUser;

    return (
      <div className="App">
        {/* <Header /> */}

        {this.state.loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              render={({ location }) =>
                user ? (
                  <Homepage displayName={user.displayName} photoURL={user.photoURL}/>
                ) : (
                  <Redirect
                    to={{ pathname: "/sign-in", state: { from: location } }}
                  />
                )
              }
            />
            <Route
              path="/sign-in"
              render={({ location }) =>
                user ? (
                  <Redirect to={{ pathname: "/", state: { from: location } }} />
                ) : (
                  <SignInPage setToLoading={this.setToLoading} />
                )
              }
            />
            <Route
              path="/sign-up"
              render={({ location }) =>
                user ? (
                  <Redirect to={{ pathname: "/", state: { from: location } }} />
                ) : (
                  <SignUpPage setToLoading={this.setToLoading} />
                )
              }
            />
            <Route component={NotFound} />
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
