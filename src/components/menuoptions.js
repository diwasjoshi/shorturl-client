import React, {Component, PropTypes} from 'react';

import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class MenuOptions extends Component {
    constructor(props) {
        super(props);
      }

    render() {
      if(this.props.isLoggedIn){
        return (
          <div id="menuoptions">
            <Link to="/logout"> LogOut</Link>
          </div>
        )
      }
      return (
        <div id="menuoptions">
          <Link to="/login"> LogIn</Link>
          <Link to="/signup"> SignUp</Link>
        </div>
      )
    }


}


function mapStateToProps(state) {
    return {'isLoggedIn': state.reducerLogin.loggedIn};
}

export default connect(mapStateToProps)(MenuOptions);
