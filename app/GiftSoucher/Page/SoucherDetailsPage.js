import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SoucherDetailsHeader as header} from '../../Common/SectionHeader';
import { reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import SoucherDetailsForm from '../Component/SoucherDetailsForm';
import * as Action from '../action';
import * as LINK_TO from '../../config/constant';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

const  { DOM: { input } } = React;

const SoucherDetailsPage = (props) => {

    const {previousPage, dispatch, handleSubmit, history, formState} = props;

    let onStripeSuccess = (payment) => {
        dispatch(Action.addTransaction({
            type : 'credit-card',
            payment : payment,
        }));

        completeTransaction();
    };

    let onPalPaySuccess = (payment) => {
        dispatch(Action.addTransaction({
            type : 'paypal',
            payment : payment,
        }));

        completeTransaction();
    };

    let completeTransaction = () => {
        dispatch(Action.createTransaction(formState.values)).then((data) => {
            if (data.payload.status === SUCCESS_RESPONSE_CODE) {
                history.push(LINK_TO.GIFT_SOUCHER_SUCCESS_ROUTE);
            } else {
                history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
            }
        }).catch(() => {
            history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
        });
    };

    let dummySubmit = () => {
       return false;
    };

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <SoucherDetailsForm
                    onStripeSuccess = {onStripeSuccess}
                    onPalPaySuccess = {onPalPaySuccess}
                    onSubmit = {dummySubmit}
                    previousPage = {previousPage}
                    formState = {formState}
                />
            </section>
        </div>
    );
};

const SoucherDetails = reduxForm({
    form: 'buy_soucher_wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherDetailsPage);


const mapStateToProps = (state) => {
    return {
        formState: state.form.buy_soucher_wizard,
    }
};

export default connect(
    mapStateToProps,
    null
)(SoucherDetails);