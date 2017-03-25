import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../Common/Main.js';
import BuySoucherContainer from '../BuySoucher/BuySoucherContainer.js';
import SwapSoucherContainer from '../SwapSoucher/SwapSoucherContainer.js';
import CustomizeSoucherContainer from '../BuySoucher/CustomizeSoucherContainer.js';
import SoucherCodeContainer from '../SwapSoucher/SoucherCodeContainer.js';
import Catalog from '../Catalog/Catalog.js';
import PhoneAuth from '../SwapSoucher/PhoneAuth.js';
import Home from '../Common/Home.js';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='buy' header='Buy Soucher' component={BuySoucherContainer} />
            <Route path='swap' header='Swap Soucher' component={SwapSoucherContainer} />
            <Route path='customize' header='Customize' component={CustomizeSoucherContainer} />
            <Route path='soucher-code' header='Soucher Code' component={SoucherCodeContainer} />
            <Route path='catalog' header='Catalog' component={Catalog} />
            <Route path='phone-auth' header='Phone Auth' component={PhoneAuth} />
        </Route>
    </Router>
);

export default routes;
