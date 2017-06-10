import React from 'react';
import {Route} from 'react-router-dom';
import Main from '../Common/Main.js';
import Home from '../Page/Home.js';
import VoucherCatalogContainer from '../Catalog/Container/VoucherCatalogContainer';
import AboutUs from '../Page/AboutUs';
import ContactUs from '../Page/ContactUs';
import BuySoucherWizard from '../BuySoucher/Wizard';
import SwapSoucherWizard from '../SwapSoucher/Wizard';
import BuySoucherSuccessPage from '../BuySoucher/Page/SuccessPage';
import SwapSuccessPage from '../SwapSoucher/Page/SuccessPage';
import SwapCancelledPage from '../SwapSoucher/Page/SwapCancelledPage';
import TransactionError from '../Page/TransactionError';

import  * as PATH_TO from './constant';

export const routes =
        <Main>
            <Route exact = {true} path = {PATH_TO.HOME} header = 'Soucher - Home' component = {Home} />

            <Route exact = {true} path = {PATH_TO.GIFT_SOUCHER_ROUTE} header='Gift Soucher' component={BuySoucherWizard} />
            <Route exact = {true} path = {PATH_TO.GIFT_SOUCHER_SUCCESS_ROUTE} header='Gift Soucher - Success' component={BuySoucherSuccessPage} />

            <Route exact = {true} path = {PATH_TO.SWAP_SOUCHER_ROUTE} header='Swap Soucher' component={SwapSoucherWizard} />
            <Route exact = {true} path = {PATH_TO.SWAP_SOUCHER_SUCCESS_ROUTE} header='Swap Soucher Success' component={SwapSuccessPage} />
            <Route exact = {true} path = {PATH_TO.SWAP_SOUCHER_CANCEL_ROUTE} header='Swap Soucher Success' component={SwapCancelledPage} />

            <Route exact = {true} path = {PATH_TO.TRANSACTION_ERROR_ROUTE} header='Transaction Error' component={TransactionError} />

            <Route exact = {true} path = {PATH_TO.VOUCHER_CATALOG_ROUTE} header='Catalog' component={VoucherCatalogContainer} />
            <Route exact = {true} path = {PATH_TO.ABOUT_US_ROUTE} header='Catalog' component={AboutUs} />
            <Route exact = {true} path = {PATH_TO.CONTACT_US_ROUTE} header='Catalog' component={ContactUs} />
        </Main>;
