import React, {Component, PropTypes} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../actions/login';
import {withRouter, Redirect} from 'react-router-dom';




class LogOut extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.loginUser('', '', 'logout');
    }
    render() {
      return <Redirect to="/" />
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser}, dispatch);
}


export default connect(null, mapDispatchToProps)(LogOut);
