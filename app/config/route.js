import React from 'react';
import {Route} from 'react-router-dom';
import Main from '../Common/Main.js';
import Home from '../Page/Home.js';
import SwapCatalogContainer from '../SwapSoucher/Container/SwapCatalogContainer.js';
import SoucherCodeContainer from '../SwapSoucher/Container/SoucherCodeContainer.js';
import VoucherCatalogContainer from '../Catalog/Container/VoucherCatalogContainer';
import PhoneAuthContainer from '../SwapSoucher/Container/PhoneAuthContainer.js';
import AboutUs from '../Page/AboutUs';
import ContactUs from '../Page/ContactUs';
import Wizard from '../BuySoucher/Wizard';
import SuccessPage from '../BuySoucher/Page/SuccessPage';

import  * as PATH_TO from './constant';

export const routes =
        <Main>
            <Route exact = {true} path = {PATH_TO.HOME} header = 'Soucher - Home' component = {Home} />
            <Route exact = {true} path = {PATH_TO.GIFT_SOUCHER_ROUTE} header='Gift Soucher' component={Wizard} />
            <Route exact = {true} path = {PATH_TO.GIFT_SOUCHER_SUCCESS_ROUTE} header='Gift Soucher - Success' component={SuccessPage} />

            <Route exact = {true} path = {PATH_TO.SOUCHER_CODE_VERIFICATION_ROUTE} header='Swap Soucher' component={SoucherCodeContainer} />
            <Route exact = {true} path = {PATH_TO.SWAP_CATALOG_ROUTE} header='Swap Soucher' component={SwapCatalogContainer} />
            <Route exact = {true} path = {PATH_TO.SWAP_PHONE_AUTHENTICATION_ROUTE} header='Phone Auth' component={PhoneAuthContainer} />

            <Route exact = {true} path = {PATH_TO.VOUCHER_CATALOG_ROUTE} header='Catalog' component={VoucherCatalogContainer} />
            <Route exact = {true} path = {PATH_TO.ABOUT_US_ROUTE} header='Catalog' component={AboutUs} />
            <Route exact = {true} path = {PATH_TO.CONTACT_US_ROUTE} header='Catalog' component={ContactUs} />
        </Main>;
