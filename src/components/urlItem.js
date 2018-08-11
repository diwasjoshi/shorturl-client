import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {urlitemclick}  from '../actions/urlitemclick';
import history from '../utils/history';


class UrlItem extends Component {
    constructor(props) {
        super(props);
    }

    onclick = () => {
      this.props.urlitemclick(this.props.data.shortUrl);
      history.push('/urlanalytics');
    }
    render() {
      return (
          <div onClick={this.onclick}>
            <span>{this.props.data.originalUrl}</span>
            <span>{this.props.data.shortUrl}</span>
          </div>
      );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({urlitemclick}, dispatch);
}


export default connect(null, mapDispatchToProps)(UrlItem);
