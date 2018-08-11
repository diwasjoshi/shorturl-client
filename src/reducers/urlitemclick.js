import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.URL_ITEM_CLICKED:
            return {
                ...state, 'selected_url': action.payload.selected_url
            };
        default:
            return state;
    }
}
