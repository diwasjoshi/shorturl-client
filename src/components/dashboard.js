import React, {Component, PropTypes} from 'react';


import {getUserUrls} from '../actions/getuserurls';
import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UrlList from './urllist'
import {withRouter, Redirect} from 'react-router-dom';


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
