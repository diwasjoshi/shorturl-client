import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.MAKE_URLS_SUCCESS:
            return {
                ...state, 'shortUrl': action.payload.shortUrl, 'originalUrl': action.payload.originalUrl
            };
        case actionTypes.MAKE_URLS_FAILURE:
            //show call failed
            return {
                ...state, makeUrlError: action.payload.response.data.error
            };
        case actionTypes.CLEAR_DATA:
        default:
            return {
                ...state, 'shortUrl': null, 'originalUrl': null, 'makeUrlError': null
            };
    }
}
