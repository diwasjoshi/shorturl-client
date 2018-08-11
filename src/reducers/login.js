import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.LOG_IN_SUCCESS:
            return {
                ...state, 'login': action.payload.data
                , 'loggedIn': true
            };
        case actionTypes.LOG_IN_FAILURE:
            return {
                ...state, 'login': action.payload.data
                , 'loggedIn': false
            };
        default:
            return state;
    }
}
