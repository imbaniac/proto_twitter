import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import tweetApp from './reducers/reducers';
import App from './containers/App';
import createLogger from 'redux-logger';

require('./styles/App.css');

let logger = createLogger();
let store = createStore(tweetApp, applyMiddleware(logger));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
