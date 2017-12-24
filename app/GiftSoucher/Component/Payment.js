import React, {Component} from 'react';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';

export default class Payment extends Component {
    render() {
        const { onPaymentSuccess, disabled, soucher, contact} = this.props;

        const onSuccess = (paymentType, token) => {

            const payment = {soucher, paymentType, token};

            onPaymentSuccess(payment);
        };

        return (
            <div className="row uniform">
                <CreditCard onSuccess = {onSuccess} disabled = {disabled} soucher = {soucher} contact = {contact} />
                <PayPal onSuccess = {onSuccess} disabled = {disabled} soucher = {soucher} contact = {contact} />
            </div>
        )
    }
};

export const PAYMENT_CREDIT_CARD = 'credit_card';
export const PAYMENT_PAYPAL = 'paypal';
