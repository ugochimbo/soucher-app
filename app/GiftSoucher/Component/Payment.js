import React, {Component} from 'react';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';

export default class Payment extends Component {
    render() {
        const { onStripeSuccess, onPalPaySuccess, disabled, soucher, contact} = this.props;

        return (
            <div className="row uniform">
                <CreditCard onStripeSuccess = {onStripeSuccess} disabled = {disabled} soucher = {soucher} contact = {contact} />
                <PayPal onPalPaySuccess = {onPalPaySuccess} disabled = {disabled} soucher = {soucher} contact = {contact} />
            </div>
        )
    }
};
