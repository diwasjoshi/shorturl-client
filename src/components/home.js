import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../actions/login';
import {withRouter, Redirect} from 'react-router-dom';




export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Redirect to={'/login'}/>
    }
}
