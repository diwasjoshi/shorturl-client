import React, {Component, PropTypes} from 'react';


import {getUrlDetails} from '../actions/urlanalytics';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {BarChart, PieChart, Legend} from 'react-easy-chart';

import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './menuoptions';
import backImage from '../assets/images/image2.png'
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};
class UrlAnalyitcs extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount() {
        this.props.getUrlDetails(this.props.selected_url);
    }
    generateGraphArray = (obj, firstKey, secondKey) => {
      var arr = [];
      for(var k in obj){
        var temp = {};
        temp[firstKey] = k;
        temp[secondKey] = obj[k];
        arr.push(temp);
      }
      return arr;
    }
    render() {
      if(!this.props.urldetails){
        return (
          <div>
          <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
              <div id="header-section">
                <div id="main-heading">shortURL</div>
                <div id="sub-heading">create short urls in seconds.</div>
              </div>
              <MenuOptions />
          </AppBar>
          <div>Loading...</div>
          </div>
        )
      }
      if(this.props.urldetails){
        return(
          <div>
          <AppBar style={styles} id="app-header"position="static" height="100%" width="100%">
              <div id="header-section">
                <div id="main-heading">shortURL</div>
                <div id="sub-heading">create short urls in seconds.</div>
              </div>
              <MenuOptions />
          </AppBar>
          <div className="UrlAnalyitcsPage">
              <div className="section">
                <div id="originalUrl" className="card horizontal">
                  <div className="card-image lab">Original Url: </div>
                  <div className="card-stacked"> <div className="card-content">{this.props.urldetails.originalUrl}</div></div>
                </div>
                <div id="shortUrl" className="card horizontal">
                  <div className="card-image lab">Short Url: </div>
                  <div className="card-stacked"> <div className="card-content">{this.props.urldetails.shortUrl}</div></div>
                </div>
                <div className="sect">
                  <span className="title"> Total Hits: </span> <span>{this.props.urldetails.analytics.hits}</span>
                </div>

                <div className="horizontal">
                  <div className="graph">
                    <div className="title">Per Day Analytics</div>
                    <BarChart
                      axes
                      axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                      colorBars
                      height={250}
                      width={300}
                      data={this.generateGraphArray(this.props.urldetails.analytics.perDayHits, 'x', 'y')}
                    />
                  </div>
                  <div className="graph">
                    <div className="title">Browser Analytics</div>
                    <BarChart
                      axes
                      axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                      colorBars
                      height={250}
                      width={300}
                      data={this.generateGraphArray(this.props.urldetails.analytics.browserHits, 'x', 'y')}
                    />
                  </div>
                </div>
                <div className="horizontal">
                  <div className="graph">
                    <div className="title">Platform Analytics</div>
                    <PieChart
                      labels
                      size={300}
                      innerHoleSize={200}
                      data={this.generateGraphArray(this.props.urldetails.analytics.platformHits, 'key', 'value')}
                    />
                    <Legend data={this.generateGraphArray(this.props.urldetails.analytics.platformHits, 'key', 'value')}
                     dataId={'key'} />
                  </div>
                  <div className="graph">
                    <div className="title">Device Analytics</div>
                     <PieChart
                       labels
                       size={300}
                       innerHoleSize={200}
                       data={this.generateGraphArray(this.props.urldetails.analytics.deviceHits, 'key', 'value')}
                     />
                     <Legend data={this.generateGraphArray(this.props.urldetails.analytics.deviceHits, 'key', 'value')}
                      dataId={'key'} />
                  </div>
                </div>
                <div><Link to="/dashboard" className="btn">Go Back</Link></div>
              </div>
          </div>
          </div>
        )
      }
    }


}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getUrlDetails}, dispatch);
}

function mapStateToProps(state) {
    return {'urldetails': state.urlanalytics.urldata, 'selected_url': state.urlitemclick.selected_url};
}

export default connect(mapStateToProps, mapDispatchToProps)(UrlAnalyitcs);
