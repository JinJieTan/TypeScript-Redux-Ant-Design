import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom/'
import store from './redux-files/store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
    document.getElementById('root'));