import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {

    switch (action.type) {
        case actionTypes.FETCH_USER_URLS_SUCCESS:
            return {
                ...state, 'data': action.payload.data
            };
        case actionTypes.FETCH_USER_URLS_FAILURE:
        default:
            return {
                ...state, 'data': []
            };
    }
}
