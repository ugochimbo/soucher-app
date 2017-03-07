import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../component/Main.js';
import Home from '../component/Home.js';
import BuySoucherContainer from '../component/BuySoucherContainer.js';
import SwapSoucherContainer from '../component/SwapSoucherContainer.js';
import Catalog from '../component/Catalog.js';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='buy' header='Buy Soucher' component={BuySoucherContainer} />
            <Route path='swap' header='Swap Soucher' component={SwapSoucherContainer} />
            <Route path='swap' header='Catalog' component={Catalog} />
        </Route>
    </Router>
);

export default routes;
