import * as keys from '../constants/keys';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCall} from '../utils/networkutils';

export function getUrlDetails(shortUrl) {
    const requestParams = {
        method: 'post',
        url: `${constants.BASE_URL}/geturldata`,
        data: {shortUrl: shortUrl}
    };

    return networkCall(requestParams, actionTypes.FETCH_URL_DETAILS_SUCCESS, actionTypes.FETCH_URL_DETAILS_FAILURE);
}
