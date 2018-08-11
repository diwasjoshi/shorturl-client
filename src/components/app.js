import React, {Component} from "react";
import {
    Router,
    Route,
    Link,
    Match,
    Redirect,
    Switch
} from "react-router-dom";
import Home from "./home";
import Login from "./login";

import SignUpPage from "./signup";
import DashBoard from "./dashboard";
import '../assets/scss/style.scss';
import MakeUrl from "./makeurl";
import UrlAnalytics from "./urlanalytics";

import history from '../utils/history';

export default class App extends Component {
    render() {
        return (
              <Router history={history}>
                  <Switch>
                      {/* HOME */}
                      <Route exact path="/">
                          <Redirect to="/login"/>
                      </Route>

                      <Route path="/login" component={Login}/>
                      <Route path="/signup" component={SignUpPage}/>
                      <Route path="/dashboard" component={DashBoard}/>
                      <Route path="/makeurl" component={MakeUrl}/>
                      <Route path="/urlanalytics" component={UrlAnalytics}/>
                  </Switch>
              </Router>
        );
    }
}
