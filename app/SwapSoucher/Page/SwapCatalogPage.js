import React from 'react';
import { reduxForm } from 'redux-form';
import SectionHeader, {SwapCatalogPageHeader as header} from '../../Common/SectionHeader';
import {validator as validate, getState} from '../Validator';
import Filter from '../../Common/Filter';
import Listing from '../Component/Listing';
import Basket from '../Component/Basket';

const  { DOM: { input } } = React;

const SwapCatalogPage = (props) => {
    const { handleSubmit, dispatch, history } = props;

    return (
        <div id="main-full" className="full">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>
                <Filter/>
                <div className="catalog-light-content">
                    <form onSubmit = {handleSubmit}>
                        <div className="row uniform">
                            <Listing catalog = {getState().catalog} dispatch = {dispatch} />
                            <Basket soucher = {getState().soucher} dispatch = {dispatch} history = {history} />
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