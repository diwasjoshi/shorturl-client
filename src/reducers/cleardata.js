import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
    console.log(action.payload);
    switch (action.type) {
        case actionTypes.CLEAR_DATA:
            var obj = {...state};
            state[action.payload.keyName] = action.payload.value;
            return obj;
        default:
            return state;
    }
}
