import axios from 'axios';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCall} from '../utils/networkutils';

export function cleardata(keyName, value) {
  console.log(keyName);
  return (dispatch) => {
    dispatch({
      type: actionTypes.CLEAR_DATA,
      payload: {keyName, value},
    })
  }
}
