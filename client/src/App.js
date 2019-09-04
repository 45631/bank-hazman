import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

import { Home } from "./Home";
import { Account } from "./Account";
import { CategoryInfo } from "./CategoryInfo";
import { JoinForm } from "./JoinForm";

const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home history={history} />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/categoryInfo">
            <CategoryInfo history={history} />
          </Route>
          <Route path="/joinform">
            <JoinForm history={history} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
