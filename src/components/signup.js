
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/signup'
import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import backImage from '../assets/images/image2.png'
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};
class SignUp extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type={field.type}
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        )
    }

    onSubmit(values) {
        this.props.signup(values, () => {
            this.props.history.push('/');
        });
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
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <Field
          label="Email"
          name = "email"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Password"
          name = "password"
          type="password"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }


}

function validate(values) {
    const errors = {};
    if (!values.email) {
        errors.email = "Enter email";
    }
    if (!values.password) {
        errors.password = "Enter password";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'SignupForm'
})(
    connect(null, {signup})(SignUp)
);
