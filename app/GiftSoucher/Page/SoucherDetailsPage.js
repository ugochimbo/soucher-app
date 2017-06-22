import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SoucherDetailsHeader as header} from '../../Common/SectionHeader';
import { Field, reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import SoucherDetailsForm from '../Component/SoucherDetailsForm';
import * as Action from '../action';
import * as LINK_TO from '../../config/constant';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

const  { DOM: { input } } = React;

const SoucherDetailsPage = (props) => {

    const {previousPage, dispatch, handleSubmit, history, transaction} = props;

    let onStripeSuccess = (payment) => {
        dispatch(Action.addTransaction({
            type : 'credit-card',
            payment : payment,
        }));

        handleSubmit(completeTransaction(transaction));
    };

    let onPalPaySuccess = (payment) => {
        dispatch(Action.addTransaction({
            type : 'paypal',
            payment : payment,
        }));

        handleSubmit(completeTransaction(transaction));
    };

    let completeTransaction = (transaction) => {
        dispatch(Action.createTransaction(transaction)).then((data) => {
            console.log(data);
            if (data.response.status === SUCCESS_RESPONSE_CODE) {
                history.push(LINK_TO.GIFT_SOUCHER_SUCCESS_ROUTE);
            } else {
                history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
            }
        }).catch((error) => {
            console.log(error);
            history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
        });
    };

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <SoucherDetailsForm
                    onStripeSuccess = {onStripeSuccess}
                    onPalPaySuccess = {onPalPaySuccess}
                    onSubmit = {handleSubmit.bind(this)}
                    previousPage = {previousPage}
                    />

            </section>
        </div>
    );
};

const SoucherDetails = reduxForm({
    form: 'buy-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherDetailsPage);


const mapStateToProps = (state) => {
    return {
        soucher: state.swap.soucher,
        catalog: state.swap.catalog,
        basket: state.swap.basket,
        isComplete: state.swap.isComplete,
    }
};

export default connect(
    mapStateToProps,
    null
)(SoucherDetails);