import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../component/Main.js';
import BuySoucherContainer from '../component/BuySoucherContainer.js';
import SwapSoucherContainer from '../component/SwapSoucherContainer.js';
import CustomizeSoucherContainer from '../component/CustomizeSoucherContainer.js';
import SoucherCodeContainer from '../component/SoucherCodeContainer.js';
import Catalog from '../component/Catalog.js';
import PhoneAuth from '../component/PhoneAuth.js';

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={BuySoucherContainer} />
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
