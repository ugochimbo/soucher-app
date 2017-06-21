import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SoucherDetailsHeader as header} from '../../Common/SectionHeader';
import { Field, reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import * as FormField from '../../Common/FormField';
import SoucherValue from '../Component/SoucherValue';
import Payment from '../Component/Payment';
import * as Action from '../action';
import * as LINK_TO from '../../config/constant';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

const  { DOM: { input } } = React;

const SoucherDetailsPage = (props) => {

    const { previousPage, onSubmit, onPalPaySuccess , onStripeSuccess} = props;

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <form onSubmit={onSubmit}>
                    <div className="light-content">
                        <div className="row">
                            <div className="6u 12u$(small)">
                                <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '20px'}} />

                                <div className="row uniform" style={{'marginTop': '10px'}}>
                                    <div className="12u$ actions">
                                        <button type="button" className="button special" onClick={previousPage}>
                                            <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-left"/>
                                            <span> Back </span>
                                            <span  style={{'marginLeft' : '5px'}} className="icon fa-user "/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="6u 12u$(small)">
                                <h3 className="align-center">Soucher Details</h3>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="nameOnCard" type = 'text' component = {FormField.Input} label = 'Name on card (optional)'/>
                                </div>

                                <SoucherValue currencies = {['EUR', 'GBP', 'USD']}/>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <div className="12u">
                                        <Field name="soucherMessage" component = {FormField.TextArea} label = 'Message (Optional)' rows = '3'/>
                                    </div>
                                </div>

                                <Payment onStripeSuccess = {onStripeSuccess} onPalPaySuccess = {onPalPaySuccess}  />

                            </div>
                        </div>
                    </div>
                </form>
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

const mapDispatchToProps = (dispatch, handleSubmit) => ({
    onSubmit: (transaction) => {
        dispatch(Action.createTransaction(transaction)).then((data) => {
            if (data.response.status === SUCCESS_RESPONSE_CODE) {
                this.props.history.push(LINK_TO.GIFT_SOUCHER_SUCCESS_ROUTE);
            } else {
                this.props.history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
            }
        }).catch(() => {
            this.props.history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
        });
    },
    onStripeSuccess: (payment) => {
        dispatch(Action.addTransaction({
            type : 'credit-card',
            payment : payment,
        }));

        //handleSubmit();
    },
    onPalPaySuccess: (payment) => {
        dispatch(Action.addTransaction({
            type : 'paypal',
            payment : payment,
        }));

        handleSubmit();
    }
});

export default connect(
    null,
    mapDispatchToProps
)(SoucherDetails);