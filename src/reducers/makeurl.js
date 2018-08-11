import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.MAKE_URLS_SUCCESS:
            return {
                ...state, 'shortUrl': action.payload.shortUrl, 'originalUrl': action.payload.originalUrl
            };
        case actionTypes.FETCH_USER_URLS_FAILURE:
            //show call failed
            return {
                ...state, 'shortUrl': action.payload.url
            };
        default:
            return state;
    }
}
