import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../Common/Main.js';
import Home from '../Page/Home.js';
import GiftCardCatalogPage from '../Catalog/Container/GiftCardCatalogPage';
import AboutUs from '../Page/AboutUs';
import ContactUs from '../Page/ContactUs';
import BuySoucherWizard from '../Gift/Wizard';
import SwapSoucherWizard from '../Redeem/Wizard';
import GiftSuccessPage from '../Gift/Page/SuccessPage';
import SwapSuccessPage from '../Redeem/Page/SuccessPage';
import SwapCancelledPage from '../Redeem/Page/SwapCancelledPage';
import TransactionError from '../Page/TransactionError';

import  * as PATH_TO from './constant';

export const routes =
        <Main>
            <Switch>
                <Route exact path = {PATH_TO.HOME} header = 'Soucher - Home' component = {Home} />

                <Route exact path = {PATH_TO.GIFT_SOUCHER_ROUTE} header='Gift Soucher' component={BuySoucherWizard} />
                <Route exact path = {PATH_TO.GIFT_SOUCHER_SUCCESS_ROUTE} header='Gift Soucher - Success' component={GiftSuccessPage} />

                <Route exact path = {PATH_TO.SWAP_SOUCHER_ROUTE} header='Swap Soucher' component={SwapSoucherWizard} />
                <Route exact path = {PATH_TO.SWAP_SOUCHER_SUCCESS_ROUTE} header='Swap Soucher Success' component={SwapSuccessPage} />
                <Route exact path = {PATH_TO.SWAP_SOUCHER_CANCEL_ROUTE} header='Swap Soucher Success' component={SwapCancelledPage} />

                <Route exact path = {PATH_TO.TRANSACTION_ERROR_ROUTE} header='Transaction Error' component={TransactionError} />

                <Route exact path = {PATH_TO.GIFT_CARD_CATALOG_ROUTE} header='Catalog' component={GiftCardCatalogPage} />
                <Route exact path = {PATH_TO.ABOUT_US_ROUTE} header='About Us' component={AboutUs} />
                <Route exact path = {PATH_TO.CONTACT_US_ROUTE} header='Contact Us' component={ContactUs} />
                
                <Route header='Home' component={Home} />
            </Switch>
        </Main>;
