import React, {Component} from 'react';
import SoucherValue from "../Component/SoucherValue";
import { Field } from 'redux-form';
import Payment from "../Component/Payment";
import * as FormField from "../../Common/FormField";
import {isSupportedCurrencies} from '../../Util/Currency';


export default class PaymentContainer extends Component {
    render() {
        const {onStripeSuccess, onPalPaySuccess, soucher, contact, flipCard} = this.props;
        const MINIMUM_AMOUNT = 1;

        let isValidSoucherAmount = () => {
            return (soucher.amount !== undefined && soucher.amount > MINIMUM_AMOUNT);
        };

        let disablePaymentButtons = () => {
            if (!isValidSoucherAmount() || !isSupportedCurrencies(soucher.currency)) {
                return 'disabled';
            }

            return '';
        };

        return(
            <div className="6u 12u$(small)">
                <h3 className="align-center">Soucher Details</h3>

                <div className="12u$" style={{'marginBottom': '10px'}}>
                    <Field name="nameOnCard" type = 'text' component = {FormField.Input} label = 'Name on card (optional)'/>
                </div>

                <SoucherValue currencies = {['EUR', 'GBP', 'USD']}/>

                <div className="12u$" style={{'marginBottom': '10px'}}>
                    <div className="12u">
                        <Field name="soucherMessage"
                               component = {FormField.TextArea}
                               label = 'Message (Optional)'
                               rows = '3'
                               onFocus = {() => flipCard(true)}
                               onBlur = {() => flipCard(false)}
                        />
                    </div>
                </div>

                <Payment
                    onStripeSuccess = {onStripeSuccess}
                    onPalPaySuccess = {onPalPaySuccess}
                    disabled = {disablePaymentButtons()}
                    soucher = {soucher}
                    contact = {contact}
                />
            </div>
        )
    }
}
