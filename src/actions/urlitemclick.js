import keys from '../constants/keys';
import * as constants from '../constants/serviceUrls'
import * as actionTypes from '../constants/actionTypes';
import {networkCall} from '../utils/networkutils';

export function urlitemclick(shortUrl) {
    return (dispatch) => {
      dispatch({
        type: actionTypes.URL_ITEM_CLICKED,
        payload: {selected_url: shortUrl},
      })
    }
}
