import React, {Component, PropTypes} from 'react';


import {getUrlDetails} from '../actions/urlanalytics';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UrlList from './urllist'



class UrlAnalyitcs extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
        this.props.getUrlDetails(this.props.selected_url);
    }

    render() {
      if(!this.props.urldetails){
        return (
          <div>Loading...</div>
        )
      }

        return(
          <div className="UserURLPage">
              <div className="heading">You have no urls yet.</div>

          </div>

        )

    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUrlDetails}, dispatch);
}

function mapStateToProps(state) {
    return {'urldetails': state.urlanalytics.urldata, 'selected_url': state.urlitemclick.selected_url};
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlAnalyitcs);
