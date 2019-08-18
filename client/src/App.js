import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

import { Home } from "./Home";

const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exect path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
