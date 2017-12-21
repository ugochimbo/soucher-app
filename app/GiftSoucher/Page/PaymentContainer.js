import React, {Component} from 'react';
import SoucherValue from "../Component/SoucherValue";
import Payment from "../Component/Payment";
import {isSupportedCurrencies} from '../../Util/Currency';
import SoucherMessage from "../Component/SoucherMessage";
import NameOnCard from "../Component/NameOnCard";
import Surcharge from "../Component/Surcharge";

export default class PaymentContainer extends Component {
    render() {
        const {onStripeSuccess, onPalPaySuccess, soucher, contact, flipCard} = this.props;
        const MINIMUM_AMOUNT = 1;
        const MAXIMUM_AMOUNT = 200;

        let isValidSoucherAmount = () => {
            return (soucher.amount !== undefined && soucher.amount > MINIMUM_AMOUNT && soucher.amount <= MAXIMUM_AMOUNT);
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
                <Surcharge />
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
