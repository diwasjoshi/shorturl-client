import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authorization from '../middleware/authorization';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);
const persistConfig = {
  key: 'prakshep',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(persistedReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(persistedReducer);
        });
    }

    return store;
}
