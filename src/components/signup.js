
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { signup } from '../actions/signup'
import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import backImage from '../assets/images/image2.png'
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};
class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.onSave = this.onSave.bind(this);
    }

    onSave(event) {
        event.preventDefault();
        this.props.signup({email: this.state.email, password: this.state.password}, () => {
            this.props.history.push('/');
        });
    }


    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }

  render () {
    const { handleSubmit } = this.props;
    return (
      <div>
      <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
          <div id="header-section">
            <div id="main-heading">shortURL</div>
            <div id="sub-heading">create short urls in seconds.</div>
          </div>
          <MenuOptions />
      </AppBar>
      <div className="login_panel">
          <div className="login">
              <form >
                <div className="input-field">
                    <input type="email" autoFocus onChange={this.onChange} title="Email must be in valid format"
                           value={this.state.email} name="email"/>

                    <label className="email">Email</label>
                </div>
                <div className="input-field">
                    <input type="password" className="input_new"/>
                    <input type="password" autoFocus onChange={this.onChange} title="Password must be of 6-8 digits"
                           value={this.state.password} name="password"/>
                    <label className="password">Password</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSave}>Submit</button>
              </form>
          </div>
      </div>
      </div>
    )
  }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({signup}, dispatch);
}

export default connect(null, mapDispatchToProps)(SignUp);
