import React, {Component, PropTypes} from 'react';


import {getUserUrls} from '../actions/getuserurls';
import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UrlList from './urllist'
import {withRouter, Redirect} from 'react-router-dom';
import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import backImage from '../assets/images/image2.png'
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      }

    componentDidMount() {
        this.props.getUserUrls();
    }

    render() {
      if(!this.props.isLoggedIn){
          return <Redirect to='/' />
      }
      return (
        <div>
        <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
            <div id="header-section">
              <div id="main-heading">shortURL</div>
              <div id="sub-heading">create short urls in seconds.</div>
            </div>
            <MenuOptions />
        </AppBar>
        <div id="userUrlsSection">
          {
              !this.props.userurls &&
              <div>Loading...</div>
          }
          {
            this.props.userurls.length > 0 &&
            <div className="userURLPage">
                <div className="create-url"> <Link to="/makeurl" className="btn ">Create Url </Link></div>
                <div className="cont">
                  <UrlList urls={this.props.userurls} />
                </div>
            </div>
          }
          {
            this.props.userurls.length <= 0 &&
            <div className="userURLPage">
                <div className="create-url"> <Link to="/makeurl" className="btn ">Create Url </Link></div>
                <div className="cont">
                  <div className="error-heading">You have no urls yet.</div>
                </div>
            </div>
          }
        </div>
        </div>
      )

    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUserUrls}, dispatch);
}

function mapStateToProps(state) {
    return {'userurls': state.reducerUserUrls.data, 'isLoggedIn': state.reducerLogin.loggedIn};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
