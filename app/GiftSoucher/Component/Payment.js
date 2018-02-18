import React, {Component} from 'react';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';
import DemoPayment from '../Component/DemoPayment';

export default class Payment extends Component {
    render() {
        const {onSuccess, disabled, soucher, contact} = this.props;

        const paymentComplete = (provider, paymentResponse) => {
            onSuccess({
                provider: provider,
                token: paymentResponse,
                details: soucher
            });
        };

        return (
            <div className="row uniform">
                <DemoPayment onSuccess = {paymentComplete} disabled = {disabled} soucher = {soucher} contact = {contact} />
                <CreditCard onSuccess = {paymentComplete} disabled = {disabled} soucher = {soucher} contact = {contact} />
                <PayPal onSuccess = {paymentComplete} disabled = {disabled} soucher = {soucher} contact = {contact} />
            </div>
        )
    }
};

export const PROVIDER_DEMO = 'demo';
export const PROVIDER_STRIPE = 'stripe';
export const PROVIDER_PAYPAL = 'paypal';
