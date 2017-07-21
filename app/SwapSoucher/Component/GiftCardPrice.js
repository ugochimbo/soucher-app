import React, {Component} from 'react';
import FixedPrice from "./FixedPrice";
import CustomAmount from "./CustomAmount";

export default class GiftCardPrice extends Component {
     render() {

        const {giftCard, currency, addToBasket, disabled, max_denomination} = this.props;

        return (
            <div className="amount">
                <FixedPrice
                    giftCard = {giftCard}
                    currency = {currency}
                    addToBasket = {addToBasket}
                    disabled = {disabled}
                    max_denomination = {max_denomination}
                />

                <CustomAmount
                    giftCard = {giftCard}
                    currency = {currency}
                    max_denomination = {max_denomination}
                />
            </div>
        )
    }
}
