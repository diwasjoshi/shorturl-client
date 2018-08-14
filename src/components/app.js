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
import {urlRedirection} from '../actions/urlredirection';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
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
import * as keys from '../constants/keys';
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};

class App extends Component {
    componentWillMount(){
      let dynamicParam = window.location.href.replace(keys.SHORT_URLS_HOST, "");
      if(['login', 'signup', 'dashboard', 'makeurl', 'urlanalytics', 'logout'].includes(dynamicParam))
        return;

      this.props.urlRedirection(dynamicParam);
      if(this.props.redirectionUrl !== undefined && this.props.redirectionUrl.status === "success")
        window.location = this.props.redirectionUrl.url;
    }
    componentDidUpdate(){
      let dynamicParam = window.location.href.replace(keys.SHORT_URLS_HOST, "");
      if(['login', 'signup', 'dashboard', 'makeurl', 'urlanalytics', 'logout'].includes(dynamicParam))
        return;
      if(this.props.redirectionUrl !== undefined && this.props.redirectionUrl.status === "success")
        window.location = this.props.redirectionUrl.url;
    }
    shouldComponentUpdate(){
      let dynamicParam = window.location.href.replace(keys.SHORT_URLS_HOST, "");
      if(['login', 'signup', 'dashboard', 'makeurl', 'urlanalytics', 'logout'].includes(dynamicParam))
        return;
      if(this.props.redirectionUrl !== undefined && this.props.redirectionUrl.status === "success")
        window.location = this.props.redirectionUrl.url;
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
                      <Route path='/:shortcode' component={UrlRedirection} />
                  </Switch>
                  </div>
              </Router>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({urlRedirection}, dispatch);
}

function mapStateToProps(state) {
    return {'redirectionUrl': state.urlredirection.urlRedirectionData};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
