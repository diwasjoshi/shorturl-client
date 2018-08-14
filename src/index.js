import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import HttpsRedirect from 'react-https-redirect';

import App from './components/app';

import AppBar from 'muicss/lib/react/appbar';

import MenuOptions from './components/menuoptions';

const store = configureStore();

let persistor = persistStore(store);


import backImage from './assets/images/image2.png'
var styles = {
  backgroundImage: 'url(' + backImage + ')'
};


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HttpsRedirect>
            <App/>
          </HttpsRedirect>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
