import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {urlitemclick}  from '../actions/urlitemclick';
import history from '../utils/history';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
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
          <div className="urlitem">
            <div id="madeUrlSection">
                <div id="originalUrl" className="card horizontal">
                  <div className="card-image lab">Original Url: </div>
                  <div className="card-stacked"> <div style={{"wordBreak": 'break-all'}} className="card-content">{this.props.data.originalUrl}</div></div>
                </div>
                <div id="shortUrl" className="card horizontal">
                  <div className="card-image lab">Short Url: </div>
                  <div className="card-stacked"> <div className="card-content">{this.props.data.shortUrl}</div></div>
                </div>
                <div id="shortUrl" className="card horizontal">
                  <div className="card-stacked">
                    <div><Button type="submit" className="btn" onClick={this.onclick}>Analytics</Button>
                    <CopyToClipboard text={this.props.data.shortUrl}>
                      <Button type="submit" className="btn">Copy to clipboard</Button>
                    </CopyToClipboard></div>
                  </div>
                </div>
            </div>
          </div>
      );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({urlitemclick}, dispatch);
}


export default connect(null, mapDispatchToProps)(UrlItem);
