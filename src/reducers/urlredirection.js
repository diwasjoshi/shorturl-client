import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.URL_REDIRECTION_SUCCESS:
            return {
                ...state, 'urlRedirectionData': { url : action.payload.url, status: 'success'}
            };
        case actionTypes.URL_REDIRECTION_FAILURE:
            return {
                ...state, 'urlRedirectionData': { url : "", status: 'failure'}
            };
        default:
            return {
                ...state, 'urlRedirectionData': { url : "", status: null}
            };
    }
}
