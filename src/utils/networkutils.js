import axios from 'axios';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
var querystring = require('querystring');

export function networkCall(requestParams, success, failure, callback) {
    return (dispatch) => {
        requestParams['headers'] = { 'Content-Type': 'application/x-www-form-urlencoded' };
        requestParams['data'] = querystring.stringify(requestParams['data']);
        axios(requestParams).then(({data, status}) => {
            dispatch({
                type: status == 200 ? success : failure,
                payload: data,
                status_code: status
            })
        }).catch(async (error) => {

          dispatch({
              type: error.response.status == 401 ? actionTypes.LOG_IN_FAILURE : failure,
              payload: error,
              status_code: error.response.status
          })
        });
    };
}

export function networkCallWithCallback(requestParams, success, failure, callback) {
    return (dispatch) => {
        requestParams['headers'] = { 'Content-Type': 'application/x-www-form-urlencoded' };
        requestParams['data'] = querystring.stringify(requestParams['data']);
        axios(requestParams).then(({data, status}) => {
            callback()
            dispatch({
                type: status == 200 ? success : failure,
                payload: data,
                status_code: status
            })
        }).catch(async (error) => {
          if (error.response.status == 401) {
            dispatch({
                type: actionTypes.LOG_IN_FAILURE,
                payload: error,
                status_code: error.response.status
            })
          }
        });

    };
}
