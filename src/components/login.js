import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../actions/login';
import {withRouter, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';



class Login extends Component {
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
        this.props.loginUser(this.state.email, this.state.password);
    }


    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to={'/dashboard'}/>
        } else {
            return (


                <div className="login_panel">
                    <div className="login">
                        <form className="form" onSubmit={this.handleSubmit}>
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

                            <Button type="submit" className="login_btn" onClick={this.onSave}>Launch</Button>
                            <span className="register">Dont have an account?
                               <Link to="/signup">SignUp</Link>
                           </span>

                        </form>
                    </div>
                </div>
            );
        }

    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({loginUser}, dispatch);
}

function mapStateToProps(state) {

    return {
        login_response: state.reducerLogin.login,
        loggedIn: state.reducerLogin.loggedIn
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
