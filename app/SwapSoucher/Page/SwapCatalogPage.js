import React from 'react';
import {connect} from 'react-redux';
import { reduxForm, reset } from 'redux-form';
import SectionHeader, {SwapCatalogPageHeader as header} from '../../Common/SectionHeader';
import {validator as validate} from '../Validator';
import Transacting from '../../Common/Transacting';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import Basket from '../Component/Basket';
import * as Currency from '../../Util/Currency';
import * as Action from '../action';
import * as LINK_TO from '../../config/constant';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

const  { DOM: { input } } = React;

const SwapCatalogPage = (props) => {
    const {soucher, catalog, basket, transacting, addBasketItem, removeBasketItem, dispatch, history} = props;
    const SWAP_CURRENCY = Currency.htmlEntityFor(soucher.currency);

    let completeSwap = () => {
        if (!basket.items.length) {
            return;
        }

        dispatch(Action.transacting(true));

        let data = {
            soucher_id : soucher.id,
            gift_cards : basket.items,
        };

        dispatch(Action.completeSwap(data)).then((response) => {
            if (response.payload.status !== SUCCESS_RESPONSE_CODE) {
                history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
            }

            history.push(LINK_TO.SWAP_SOUCHER_SUCCESS_ROUTE);
        }).catch(() => {
            history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
        });
    };

    let cancelSwap = () => {
        dispatch(Action.cancelSwap());
        dispatch(reset('swap-soucher-wizard'));
        history.push(LINK_TO.SWAP_SOUCHER_CANCEL_ROUTE);
    };

    let isTransacting = () => {
        if (transacting) {
            return <Transacting message = 'Finalizing Swap' />
        }

        return '';
    };

    return (
        <div id="main-full" className="full">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>
                <Filter />
                <div className="catalog-light-content">
                    <form onSubmit = {completeSwap}>
                        <div className="row uniform">
                            <Listing catalog = {catalog} currency = {SWAP_CURRENCY} addBasketItem = {addBasketItem} />
                            <Basket basket = {basket} currency = {SWAP_CURRENCY} removeBasketItem = {removeBasketItem} cancelSwap = {cancelSwap} completeSwap = {completeSwap}/>
                        </div>
                        {isTransacting()}
                    </form>
                </div>
            </section>
        </div>
    )
};

const SwapCatalog = reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(SwapCatalogPage);

const mapStateToProps = (state) => {
    return {
        soucher: state.swap.soucher,
        catalog: state.swap.catalog,
        basket: state.swap.basket,
        isComplete: state.swap.isComplete,
        transacting: state.global.transacting,
    }
};

const mapDispatchToProps = dispatch => ({
    addBasketItem : (giftCard) => {
        dispatch(Action.addBasketItem(giftCard));
    },
    removeBasketItem : (basketItem) => {
        dispatch(Action.removeBasketItem(basketItem));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SwapCatalog);
