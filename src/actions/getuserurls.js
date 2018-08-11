import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCall} from '../utils/networkutils';

export function getUserUrls() {
    const requestParams = {
        method: 'get',
        url: `${constants.BASE_URL}/users/getallurls`
    };

    return networkCall(requestParams, actionTypes.FETCH_USER_URLS_SUCCESS, actionTypes.FETCH_USER_URLS_FAILURE);
}
