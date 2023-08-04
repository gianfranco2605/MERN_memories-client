import React from 'react';
import ReactDOM from 'react-dom';
// provider to acceses any state child or parent component
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';


import reducers from './reducers';

import App from './App';

const store = configureStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root')
);  