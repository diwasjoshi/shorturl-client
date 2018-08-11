import * as actionTypes from '../constants/actionTypes';
import axios from 'axios';
import * as constants from '../constants/serviceUrls'

const authorization = store => next => action => {

    if (action.status_code == 401) {
        refreshUser();
    }
    next(action);
};

async function refreshUser() {

    var bodyFormData = new FormData();
    bodyFormData.set('refresh_token', localStorage.getItem("refresh"));
    const data = await axios.post(`${constants.BASE_URL}/user/refreshtoken`, bodyFormData
        , {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': `Token ${localStorage.getItem("jwt")}`
            }
        });
    if (data.status == 200) {
        localStorage.setItem("jwt", data.data.auth_token);
    }
    ;

}

export default authorization;
