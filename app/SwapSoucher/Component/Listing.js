import React, {Component} from 'react';
import GiftCard from './GiftCard';

export default class Listing extends Component {

     render() {
         const {catalog, currency, addBasketItem} = this.props;

         let swapItemList = () => {
             return catalog.items.gift_cards.map(function (gift_card) {
                 return <GiftCard key = {gift_card.id}
                                  gift_card = {gift_card}
                                  currency = {currency}
                                  disabled = {catalog.disabled}
                                  max_denomination = {catalog.max_amount}
                                  addToBasket = {addBasketItem} />;
             })
         };

        return (
            <div className="11u 12u$(small)">
                <div id="swap-catalog">
                    {swapItemList()}
                </div>
            </div>
        )
    }
}
