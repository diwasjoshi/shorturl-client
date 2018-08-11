import axios from 'axios';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCallWithCallback} from '../utils/networkutils';

export function signup(values, callback) {

    const requestParams = {
        method: 'post',
        url: `${constants.BASE_URL}/users/register`,
        data: {'email': values.email, 'password': values.password}
    };
    console.log(requestParams);
    return networkCallWithCallback(requestParams, actionTypes.SIGNUP_SUCCESS, actionTypes.SIGNUP_FAILURE, callback);

}
