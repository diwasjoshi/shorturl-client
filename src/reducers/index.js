import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'

import reducerLogin from './login';

import reducerUserUrls from './userurls';
import makeUrl from './makeurl';
import urlitemclick from './urlitemclick';
import urlanalytics from './urlanalytics';

const rootReducer = combineReducers({
    form: formReducer,
    reducerLogin,
    reducerUserUrls,
    makeUrl,
    urlitemclick,
    urlanalytics
});

export default rootReducer;
