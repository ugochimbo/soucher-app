import React, {Component} from 'react';
import SoucherValue from "../Component/SoucherValue";
import Payment from "../Component/Payment";
import {isSupportedCurrencies} from '../../Util/Currency';
import SoucherMessage from "../Component/SoucherMessage";
import NameOnCard from "../Component/NameOnCard";

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

                <SoucherValue currencies = {['EUR', 'GBP', 'USD']} />
                <NameOnCard />
                <SoucherMessage flipCard = {flipCard} />
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
