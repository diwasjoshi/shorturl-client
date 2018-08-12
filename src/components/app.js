import React, {Component} from "react";
import {
    Router,
    Route,
    Link,
    Match,
    Redirect,
    Switch,
    BrowserRouter
} from "react-router-dom";
import Home from "./home";
import Login from "./login";

import SignUpPage from "./signup";
import DashBoard from "./dashboard";
import '../assets/scss/style.scss';
import MakeUrl from "./makeurl";
import UrlAnalytics from "./urlanalytics";
import UrlRedirection from "./urlredirection";
import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import LogOut from './logout.js';
import history from '../utils/history';
import backImage from '../assets/images/image2.png'
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};

export default class App extends Component {
    render() {
        return (
              <Router history={history}>
                  <div>
                  <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
                      <div id="header-section">
                        <div id="main-heading">shortURL</div>
                        <div id="sub-heading">create short urls in seconds.</div>
                      </div>
                      <MenuOptions />
                  </AppBar>
                  <Switch>
                      {/* HOME */}
                      <Route exact path="/">
                          <Route to="/home" component={Home} />
                      </Route>

                      <Route path="/login" component={Login}/>
                      <Route path="/signup" component={SignUpPage}/>
                      <Route path="/dashboard" component={DashBoard}/>
                      <Route path="/makeurl" component={MakeUrl}/>
                      <Route path="/urlanalytics" component={UrlAnalytics}/>
                      <Route path="/logout" component={LogOut}/>
                      <Route path='/:shortcode' component={UrlRedirection} />
                  </Switch>
                  </div>
              </Router>
        );
    }
}
