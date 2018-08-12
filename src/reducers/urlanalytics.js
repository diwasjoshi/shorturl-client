import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.FETCH_URL_DETAILS_SUCCESS:
            return {
                ...state, 'urldata': action.payload.urldata
            };
        case actionTypes.FETCH_URL_DETAILS_FAILURE:
        default:
            return {
                ...state, 'urldata': null
            };
    }
}
