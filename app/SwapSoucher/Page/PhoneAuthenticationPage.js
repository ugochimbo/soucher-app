import React from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SectionHeader, {PhoneAuthenticationPageHeader as header} from '../../Common/SectionHeader';
import {validator as validate} from '../Validator';
import * as FormField from '../../Common/FormField';
import {swapSoucher} from '../../action';
import * as LINK_TO from '../../config/constant';

const PhoneAuthenticationPage = (props) => {
    const { handleSubmit, previousPage, history } = props;

    function handleFormSubmit(formProps, dispatch) {
        dispatch(swapSoucher(formProps));
        history.push(LINK_TO.SWAP_SOUCHER_SUCCESS_ROUTE);
    }

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>

                <div className="light-content">
                    <form onSubmit={handleSubmit(handleFormSubmit.bind(this))}>
                        <div className="row uniform">
                            <div className="6u 12u$(small) align-center">
                                <img src="/asset/image/soucher_code.png" width="350px" />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3>Authentication Code: </h3>

                                <div className="row" style={{'marginBottom': '30px'}}>
                                    <Field name="authCode" type = 'text' component = {FormField.Input} label = 'Enter Code' />
                                </div>

                                <div className="row actions">
                                    <button type="submit" className="button big special">
                                        <span> Complete swap </span>
                                        <span  style={{'marginLeft' : '5px'}} className="icon fa-check-circle "/>
                                    </button>
                                </div>

                                <div className="row actions" style={{'marginTop': '20px'}}>
                                    <button type="button" className="button big special" onClick={previousPage}>
                                        <span  style={{'marginRight' : '5px'}} className="icon fa-shopping-basket "/>
                                        <span> Edit Basket </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
};

const PhoneAuthentication = reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(PhoneAuthenticationPage);

const mapStateToProps = (state) => {
    return {
        filter : {
            category: '',
            search: '',
        },
        catalog : state.catalog,
        basket: {
            summary: {
                amount: {
                    total: 10,
                    in_use: 0,
                }
            },
            item_list: [],
        }
    }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneAuthentication);