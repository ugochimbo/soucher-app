import React from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import SectionHeader, {SwapCatalogPageHeader as header} from '../../Common/SectionHeader';
import {validator as validate} from '../Validator';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import Basket from '../Component/Basket';
import * as Currency from '../../Util/Currency';

const  { DOM: { input } } = React;

const SwapCatalogPage = (props) => {
    const { swap, handleSubmit} = props;
    const SWAP_CURRENCY = Currency.htmlEntityFor(swap.soucher.currency);

    return (
        <div id="main-full" className="full">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>
                <Filter />
                <div className="catalog-light-content">
                    <form onSubmit = {handleSubmit}>
                        <div className="row uniform">
                            <Listing catalog = {swap.catalog} currency = {SWAP_CURRENCY} />
                            <Basket basket = {swap.basket} currency = {SWAP_CURRENCY} />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
};

const SwapCatalog = reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SwapCatalogPage);

const mapStateToProps = (state) => {
    return {
        swap: state.swap,
    }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SwapCatalog);
