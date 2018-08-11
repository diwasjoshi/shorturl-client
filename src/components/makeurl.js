import React, {Component, PropTypes} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {makeUrl} from '../actions/makeurl';
import {withRouter, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import Calendar from 'react-datetime-picker';



class MakeUrl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            accessEmails: "",
            allowAccessControl: false,
            expiryDate: null
        };

        this.onSave = this.onSave.bind(this);
        this.accessChange= this.accessChange.bind(this);
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
    changeDate = (date) => {
      console.log(date);
      if(date.valueOf() < new Date().valueOf()){
        console.log(this.state.expiryDate);
        return;
      }
      this.setState({
        expiryDate: date
      });
    }
    render() {
        if(this.props.shortUrl && this.props.originalUrl){
          return(
            <div>
              {this.props.shortUrl}
              {this.props.originalUrl}
            </div>
          )
        }

        return (
            <div className="url_generation_panel">
                <div className="make_url">
                    <form className="form" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input  autoFocus onChange={this.onChange} value={this.state.originalUrl} name="url"/>
                            <label className="email">Long Url</label>
                        </div>
                        <div className="input">
                            <Checkbox checked={ this.state.allowAccessControl } onClick={ this.accessChange } />
                            <label className="access-control">Allow Access Control</label>
                        </div>

                        {
                          this.state.allowAccessControl &&

                          <div className="input-field">
                            <input  autoFocus onChange={this.onChange} value={this.state.accessEmails} name="accessEmails"/>
                            <label className="access-email">Allowed Emails</label>
                          </div>
                        }

                        <Button type="submit" className="login_btn" onClick={this.onSave}>Submit</Button>
                        <Link to="/dashboard" className="btn ">Cancel</Link>
                    </form>
                    <div>
                      <Calendar
                        onChange={this.changeDate}
                        value={this.state.expiryDate || new Date()}
                        name="expiryDate"
                      />
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeUrl);
