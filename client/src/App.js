import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

import { Home } from "./Home";
import { Account } from "./Account";

const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    );
  }
}
