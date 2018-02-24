import React, {Component} from 'react';
import GiftCardImage from "./GiftCardImage";
import GiftCardPrice from "./GiftCardPrice";

export default class GiftCard extends Component {
     render() {

        const {gift_card, currency, addToBasket, disabled, max_denomination} = this.props;

        return (
            <div className="item">
                <GiftCardImage name = {gift_card.img_name}/>
                <GiftCardPrice
                    giftCard = {gift_card}
                    currency = {currency}
                    addToBasket = {addToBasket}
                    disabled = {disabled}
                    max_denomination = {max_denomination}
                />
            </div>
        )
    }
}
