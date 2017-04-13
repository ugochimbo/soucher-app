import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import {routes} from './config/route';
import {BrowserRouter} from 'react-router-dom';

render(
    <Provider store={store}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    </Provider>,
    document.getElementById('page-wrapper')
);
