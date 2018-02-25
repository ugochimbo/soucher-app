import React, {Component} from 'react';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';
import DemoPayment from '../Component/DemoPayment';
import BackButton from "./BackButton";

export default class Payment extends Component {
    render() {
        const {onSuccess, disabled, soucher, contact, backButtonOnClick} = this.props;

        const paymentComplete = (provider, paymentResponse) => {
            onSuccess({
                provider: provider,
                token: paymentResponse,
                details: soucher
            });
        };

        return (
            <div className="row uniform">
                <hr className="row uniform hide-desktop" />

                <DemoPayment onSuccess = {paymentComplete} disabled = {disabled} soucher = {soucher} contact = {contact} />

                {/*<CreditCard onSuccess = {paymentComplete} disabled = {disabled} soucher = {soucher} contact = {contact} />
                <PayPal onSuccess = {paymentComplete} disabled = {disabled} soucher = {soucher} contact = {contact} />*/}

                <div className="hide-desktop">
                    <BackButton buttonText="Back" onClick = {backButtonOnClick} />
                </div>
            </div>
        )
    }
};

export const PROVIDER_DEMO = 'demo';
export const PROVIDER_STRIPE = 'stripe';
export const PROVIDER_PAYPAL = 'paypal';
