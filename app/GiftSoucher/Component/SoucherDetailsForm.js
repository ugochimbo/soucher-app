import React, {Component} from 'react';
import { Field } from 'redux-form';
import * as FormField from '../../Common/FormField';
import Transacting from '../../Common/Transacting';
import SoucherValue from '../Component/SoucherValue';
import Payment from '../Component/Payment';
import {isSupportedCurrencies} from '../../Util/Currency';

export default class SoucherDetailsForm extends Component{
     render() {
        const {previousPage, onStripeSuccess, onPalPaySuccess, onSubmit, formState, transacting} = this.props;
        const amount =  formState.values.soucherAmount;
        const currency =  formState.values.soucherCurrency;

        const MINIMUM_AMOUNT = 1;

        let isValidSoucherAmount = () => {
            return (amount !== undefined && amount > MINIMUM_AMOUNT);
        };

        let disablePaymentButtons = () => {
            if (!isValidSoucherAmount() || !isSupportedCurrencies(currency)) {
                return 'disabled';
            }

            return '';
        };

        let isTransacting = () => {
            if (transacting) {
                return <Transacting />
            }

            return '';
        };

        return (
            <form onSubmit={onSubmit()}>
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

                            <Payment onStripeSuccess = {onStripeSuccess} onPalPaySuccess = {onPalPaySuccess} disabled = {disablePaymentButtons()} />
                        </div>
                    </div>
                </div>
                {isTransacting()}
            </form>
        )
    }
}
