import axios from 'axios';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCall} from '../utils/networkutils';

export function makeUrl({ url, accessEmails, allowAccessControl, allowExpiryDate, expiryDate, clearData, allowCustomPath, customPath }) {
    if(clearData){
      return (dispatch) => {
        dispatch({
          type: actionTypes.CLEAR_DATA,
          payload: {},
        })
      }
    }
    var bodyFormData = { url };
    if(allowCustomPath)
      bodyFormData['customPath'] = customPath;
    if(allowAccessControl)
      bodyFormData['privateEmails'] = accessEmails.split(',');
    if(allowExpiryDate)
      bodyFormData['expiryDate'] = expiryDate.toString();

    const requestParams = {
        method: 'post',
        url: `${constants.BASE_URL}/makeurl`,
        data: bodyFormData
    };
    return networkCall(requestParams, actionTypes.MAKE_URLS_SUCCESS, actionTypes.MAKE_URLS_FAILURE);
}
