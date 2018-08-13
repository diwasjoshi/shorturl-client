import * as keys from '../constants/keys';
import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {makeUrl} from '../actions/makeurl';
import {withRouter, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Calendar from 'react-datetime-picker';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import backImage from '../assets/images/image2.png';
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};
class MakeUrl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            accessEmails: "",
            allowAccessControl: false,
            expiryDate: null,
            clearData: false,
            allowExpiryDate: false,
            allowCustomPath: false,
            customPath: ""
        };

        this.onSave = this.onSave.bind(this);
        this.accessChange= this.accessChange.bind(this);
    }

    componentWillMount() {
        this.props.makeUrl({clearData: true});
    }
    onSave(event) {
        event.preventDefault();
        this.props.makeUrl(this.state);
    }


    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }
    accessChange = () => {
      this.setState({
        allowAccessControl: !this.state.allowAccessControl
      });
    }
    customPathChange = () => {
      this.setState({
        allowCustomPath: !this.state.allowCustomPath
      });
    }
    changeDate = (date) => {
      if(date.valueOf() < new Date().valueOf()){
        return;
      }
      this.setState({
        expiryDate: date
      });
    }
    expiryDateChange = () => {
      this.setState({
        allowExpiryDate: !this.state.allowExpiryDate
      });
    }
    render() {
        if(!this.props.isLoggedIn){
            return <Redirect to='/' />
        }
        return (
            <div>
            <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
                <div id="header-section">
                  <div id="main-heading">shortURL</div>
                  <div id="sub-heading">create short urls in seconds.</div>
                </div>
                <MenuOptions />
            </AppBar>
            <div className="url_generation_panel">
                <div className="make_url">
                    {
                      this.props.shortUrl && this.props.originalUrl &&
                      <div id="madeUrlSection">
                        <div id="originalUrl" className="card horizontal">
                          <div className="card-image lab">Original Url: </div>
                          <div className="card-stacked"> <div className="card-content">{this.props.originalUrl}</div></div>
                        </div>
                        <div id="shortUrl" className="card horizontal">
                          <div className="card-image lab">Short Url: </div>
                          <div className="card-stacked"> <div className="card-content">{this.props.shortUrl}</div></div>
                        </div>
                        <div>
                          <CopyToClipboard text={this.props.shortUrl}>
                            <Button type="submit" className="submit_btn">Copy short Url to clipboard</Button>
                          </CopyToClipboard>
                          <Link className="btn" to="/dashboard">Make Another Url</Link>
                        </div>

                      </div>
                    }
                    {
                      !this.props.shortUrl && !this.props.originalUrl &&
                      <form className="form" onSubmit={this.handleSubmit}>
                          <div className="input-field">
                              <input type="url" onChange={this.onChange} value={this.state.originalUrl} name="url"/>
                              <label className="url">Paste a link to shorten</label>
                          </div>

                          <div>
                              <div className="input">
                                  <Checkbox checked={ this.state.allowCustomPath } onClick={ this.customPathChange } />
                                  <label className="access-control">Custom Path</label>
                              </div>

                              {
                                this.state.allowCustomPath &&

                                <div className="input-field">
                                  <input type="text" autoFocus onChange={this.onChange} value={this.state.customPath} name="customPath"/>
                                  <label className="customPath">{keys.SHORT_URLS_HOST + this.state.customPath}</label>
                                </div>
                              }
                          </div>
                          <div>
                              <div className="input">
                                  <Checkbox checked={ this.state.allowAccessControl } onClick={ this.accessChange } />
                                  <label className="access-control">Allow Access Control</label>
                              </div>

                              {
                                this.state.allowAccessControl &&

                                <div className="input-field">
                                  <input type="text" autoFocus onChange={this.onChange} value={this.state.accessEmails} name="accessEmails"/>
                                  <label className="accessEmails">Allowed Emails</label>
                                </div>
                              }
                          </div>
                          <div>
                            <div className="input">
                                <Checkbox checked={ this.state.allowExpiryDate } onClick={ this.expiryDateChange } />
                                <label className="access-control">Add Expiry Date</label>
                            </div>
                            {
                              this.state.allowExpiryDate &&
                              <Calendar
                                onChange={this.changeDate}
                                value={this.state.expiryDate || new Date()}
                                name="expiryDate"
                              />
                            }
                          </div>
                          <div>
                            {
                              this.props.makeUrlError &&
                              <div>{this.props.makeUrlError}</div>
                            }
                          </div>
                          <Button type="submit" className="submit_btn" onClick={this.onSave}>Submit</Button>
                          <Link to="/dashboard" className="btn ">Cancel</Link>
                      </form>
                    }
                </div>
            </div>
            </div>
        );
      }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({makeUrl}, dispatch);
}

function mapStateToProps(state) {
    return {
        originalUrl: state.makeUrl.originalUrl,
        shortUrl: state.makeUrl.shortUrl,
        makeUrlError: state.makeUrl.makeUrlError,
        isLoggedIn: state.reducerLogin.loggedIn
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeUrl);
