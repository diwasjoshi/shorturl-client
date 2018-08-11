import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/app';

import AppBar from 'muicss/lib/react/appbar';



const store = configureStore();

let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppBar id="app-header"position="static" height="100%" width="100%">
              <div id="header-app-name" className="mui--text-white mui--text-display2">shortURL</div>
          </AppBar>

            <App/>

        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
