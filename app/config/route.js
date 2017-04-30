import React from 'react';
import {Route} from 'react-router-dom';
import Main from '../Common/Main.js';
import Home from '../Page/Home.js';
import ContactFormContainer from '../BuySoucher/Container/ContactFormContainer.js';
import SwapCatalogContainer from '../SwapSoucher/Container/SwapCatalogContainer.js';
import CustomizeSoucherContainer from '../BuySoucher/Container/CustomizeFormContainer.js';
import SoucherCodeContainer from '../SwapSoucher/Container/SoucherCodeContainer.js';
import VoucherCatalogContainer from '../Catalog/Container/VoucherCatalogContainer';
import PhoneAuthContainer from '../SwapSoucher/Container/PhoneAuthContainer.js';
import AboutUs from '../Page/AboutUs';
import ContactUs from '../Page/ContactUs';

export const routes =
        <Main>
            <Route exact={true} path='/' header='Buy Soucher - Contact Details' component={Home} />
            <Route path='/buy/buyer-details' header='Buy Soucher - Contact Details' component={ContactFormContainer} />
            <Route path='/buy/card-details' header='Buy Soucher - Card Details' component={CustomizeSoucherContainer} />

            <Route path='/swap/verify-code' header='Swap Soucher' component={SoucherCodeContainer} />
            <Route path='/swap/catalog' header='Swap Soucher' component={SwapCatalogContainer} />
            <Route path='/swap/phone-auth' header='Phone Auth' component={PhoneAuthContainer} />

            <Route path='/voucher/catalog' header='Catalog' component={VoucherCatalogContainer} />
            <Route path='/about-us' header='Catalog' component={AboutUs} />
            <Route path='/contact-us' header='Catalog' component={ContactUs} />
        </Main>;
