import React, {Component} from 'react';
import FixedAmount from "./FixedAmount";
import CustomAmount from "./CustomAmount";

export default class GiftCardPrice extends Component {
     render() {

        const {giftCard, currency, addToBasket, disabled, max_denomination} = this.props;

        return (
            <div className="amount">
                <FixedAmount
                    giftCard = {giftCard}
                    currency = {currency}
                    addToBasket = {addToBasket}
                    disabled = {disabled}
                    maximumAmount = {max_denomination}
                />
                <CustomAmount
                    giftCard = {giftCard}
                    currency = {currency}
                    addToBasket = {addToBasket}
                    maximumAmount = {max_denomination}
                />
            </div>
        )
    }
}
