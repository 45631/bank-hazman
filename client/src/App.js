import React, { Component } from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

import { Home } from "./Home";
import { Account } from "./Account";
import { CategoryInfo } from "./CategoryInfo";
import { JoinForm } from "./JoinForm";
import { StatementForm } from "./StatementForm";
import { About } from "./About";
import { Contact } from "./Contact";

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
          <Route path="/statementform">
            <StatementForm history={history} />
          </Route>
          <Route path="/about">
            <About history={history} />
          </Route>
          <Route path="/contact">
            <Contact history={history} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
