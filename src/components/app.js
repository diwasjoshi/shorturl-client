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
    componentWillMount(){
      console.log(this.props);
    }
    render() {
        return (
              <Router history={history}>
                <div>
                  
                  <Switch>

                      <Route exact path="/">
                          <Route to="/home" component={Home} />
                      </Route>

                      <Route path="/login" component={Login}/>
                      <Route path="/signup" component={SignUpPage}/>
                      <Route path="/dashboard" component={DashBoard}/>
                      <Route path="/makeurl" component={MakeUrl}/>
                      <Route path="/urlanalytics" component={UrlAnalytics}/>
                      <Route path="/logout" component={LogOut}/>
                      <Route path='/:shortcode' component={UrlRedirection} onEnter={() => console.log('this.props.match.params.shortcode')} />
                  </Switch>
                  </div>
              </Router>
        );
    }
}
