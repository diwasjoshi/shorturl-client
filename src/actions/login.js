import axios from 'axios';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';

export function loginUser(email, password) {
    var bodyFormData = {
      'email': email,
      'password': password
    };
    const request = axios.post(`${constants.BASE_URL}/users/login`, bodyFormData);
    return (dispatch) => {
        request.then(({data, status}) => {
            if (status == 200) {
                dispatch({
                    type: actionTypes.LOG_IN_SUCCESS,
                    payload: data,
                    status_code: status
                })
            } else {
                dispatch({
                    type: actionTypes.LOG_IN_FAILURE,
                    payload: data,
                    status_code: status
                })
            }

        });
    };
}
