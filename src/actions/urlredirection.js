import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCall} from '../utils/networkutils';

export function urlRedirection(shortCode) {
    const requestParams = {
        method: 'post',
        url: `${constants.BASE_URL}/urlredirection`,
        data: {shortCode: shortCode}
    };

    return networkCall(requestParams, actionTypes.URL_REDIRECTION_SUCCESS, actionTypes.URL_REDIRECTION_FAILURE);
}
