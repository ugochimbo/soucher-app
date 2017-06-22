import React, {Component} from 'react';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';

export default class SoucherValue extends Component {
    render() {
        const { onStripeSuccess, onPalPaySuccess, disabled} = this.props;

        return (
            <div className="row uniform">
                <CreditCard onStripeSuccess = {onStripeSuccess} disabled = {disabled} />
                <PayPal onPalPaySuccess = {onPalPaySuccess} disabled = {disabled} />
            </div>
        )
    }
};
