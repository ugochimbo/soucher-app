import React from 'react';
import { reduxForm } from 'redux-form';
import SectionHeader, {SwapCatalogPageHeader as header} from '../../Common/SectionHeader';
import {validator as validate, getState} from '../Validator';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import Basket from '../Component/Basket';
import * as Currency from '../../Util/Currency';

const  { DOM: { input } } = React;

const SwapCatalogPage = (props) => {
    const { handleSubmit, dispatch, history } = props;

    const MAX_SWAP_AMOUNT = getState().soucher.amount;
    const SWAP_CURRENCY = Currency.htmlEntityFor(getState().soucher.currency);

    let state = {
        filter : {
            category: '',
            search: '',
        },
        catalog : getState().catalog,
        basket: {
            summary: {
                amount: {
                    total: MAX_SWAP_AMOUNT,
                    in_use: 0,
                }
            },
            item_list: [],
        }
    };

    return (
        <div id="main-full" className="full">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>
                <Filter/>
                <div className="catalog-light-content">
                    <form onSubmit = {handleSubmit}>
                        <div className="row uniform">
                            <Listing catalog = {state.catalog} currency = {SWAP_CURRENCY} dispatch = {dispatch} />
                            <Basket basket = {state.basket} dispatch = {dispatch} currency = {SWAP_CURRENCY} history = {history} />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SwapCatalogPage);