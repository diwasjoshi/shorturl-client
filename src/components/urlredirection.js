import React, {Component, PropTypes} from 'react';


import {urlRedirection} from '../actions/urlredirection';
import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from 'react-modal';
import Redirection from './redirection';

import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import backImage from '../assets/images/image2.png';
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};


class UrlRedirection extends Component {
    constructor(props) {
        super(props);
      }

    componentWillMount() {
        if(this.props.redirectionUrl !== undefined && this.props.redirectionUrl.status === "success")
          window.location = this.props.redirectionUrl.url;
        else
          this.props.urlRedirection(this.props.match.params.shortcode);
    }

    render() {
      if(this.props.redirectionUrl.status === "success"){
        return (
          <Redirection redirectionUrl={this.props.redirectionUrl.url}/>
        )
      }

      if(this.props.redirectionUrl.status === "failure"){
        return (
          <div>
            <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
                <div id="header-section">
                  <div id="main-heading">shortURL</div>
                  <div id="sub-heading">create short urls in seconds.</div>
                </div>
                <MenuOptions />
            </AppBar>

            <div className="userURLPage">
                <div className="cont">
                  <div className="error-heading">Url Not Found.</div>
                </div>
                <div className="create-url"> <Link to="/makeurl" className="btn ">Create A Url</Link></div>
            </div>
          </div>
        )
      }
      return <div/>
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({urlRedirection}, dispatch);
}

function mapStateToProps(state) {
    return {'redirectionUrl': state.urlredirection.urlRedirectionData};
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlRedirection);
