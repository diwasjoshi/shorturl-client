import React, {Component, PropTypes} from 'react';


import {urlRedirection} from '../actions/urlredirection';
import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from 'react-modal';
import Redirection from './redirection';

class UrlRedirection extends Component {
    constructor(props) {
        super(props);
      }

    componentWillMount() {
        console.log(this.props.match.params.shortcode);
        this.props.urlRedirection(this.props.match.params.shortcode);
    }

    render() {
      if(!this.props.redirectionUrl.status){
        return (
          <div>Loading...</div>
        )
      }
      if(this.props.redirectionUrl.status === "success"){
        return (
          <Redirection redirectionUrl={this.props.redirectionUrl.url}/>
        )
      }

      return (
        <div> Url not found </div>
      )

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({urlRedirection}, dispatch);
}

function mapStateToProps(state) {
    return {'redirectionUrl': state.urlredirection.urlRedirectionData};
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlRedirection);
