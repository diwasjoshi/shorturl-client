import React, {Component, PropTypes} from 'react';


import {getUserUrls} from '../actions/getuserurls';
import {Button} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UrlList from './urllist'

import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'))

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modalIsOpen:false
        };
      }

    componentDidMount() {
        this.props.getUserUrls();
    }

    render() {
      if(!this.props.userurls){
        return (
          <div>Loading...</div>
        )
      }
      if(this.props.userurls.length > 0){
        return(
          <div className="UserURLPage">
              <div className="heading">Created Urls</div>
              <UrlList urls={this.props.userurls} />
              <Link to="/makeurl" className="btn ">Create Url </Link>
          </div>
        )
      }else{
        return(
          <div className="UserURLPage">
              <div className="heading">You have no urls yet.</div>
              <Link to="/makeurl" className="btn ">Create Url </Link>
          </div>

        )
      }
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUserUrls}, dispatch);
}

function mapStateToProps(state) {
    return {'userurls': state.reducerUserUrls.data};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
