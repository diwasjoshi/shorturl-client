
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/signup'

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
