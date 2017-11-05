import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SoucherDetailsHeader as header} from '../../Common/SectionHeader';
import { reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import SoucherDetailsForm from '../Component/SoucherDetailsForm';
import * as Action from '../action';
import * as LINK_TO from '../../config/constant';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';
import * as Card from "../../Util/Card";

const  { DOM: { input } } = React;

const SoucherDetailsPage = (props) => {

    const {previousPage, dispatch, history, formState, transacting} = props;

    let onStripeSuccess = (payment) => {
        completeTransaction({
            type : 'credit-card',
            payment : payment
        });
    };

    let onPalPaySuccess = (payment) => {
        completeTransaction({
            type : 'paypal',
            payment : payment
        });
    };

    let completeTransaction = (payment) => {
        dispatch(Action.transacting(true));

        formState.values.nameOnCard = formState.values.nameOnCard || Card.name(formState.values.buyerName);
        formState.values.soucherMessage = formState.values.soucherMessage || '';

        const transaction = {
            gift: formState.values,
            payment: payment
        };

        dispatch(Action.createTransaction(transaction)).then((data) => {
            if (data.payload.data.status !== SUCCESS_RESPONSE_CODE) {
                history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
            }

            history.push(LINK_TO.GIFT_SOUCHER_SUCCESS_ROUTE);
        }).catch(() => {
            history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
        });
    };

    let preventDefault = () => {
       return false;
    };

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <SoucherDetailsForm
                    onStripeSuccess = {onStripeSuccess}
                    onPalPaySuccess = {onPalPaySuccess}
                    onSubmit = {preventDefault}
                    previousPage = {previousPage}
                    formState = {formState}
                    transacting = {transacting}
                />
            </section>
        </div>
    );
};

const SoucherDetails = reduxForm({
    form: 'gift_soucher_wizard',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherDetailsPage);

const mapStateToProps = (state) => {
    return {
        formState: state.form.gift_soucher_wizard,
        transacting: state.global.transacting
    }
};

export default connect(mapStateToProps)(SoucherDetails);
