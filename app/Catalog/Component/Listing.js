import React, {Component} from 'react';
import GiftCard from './GiftCard';
import Transacting from './../../Common/Transacting';

export default class Listing extends Component {

     render() {
         const {catalog, currency} = this.props;

         let listing = () => {

             console.log(catalog);

             if (!catalog.length) {
                 return <Transacting />
             }

             return catalog.map(function (gift_card) {
                 return <GiftCard key = {gift_card.id}
                                  gift_card = {gift_card}
                                  currency = {currency}
                    />;
             })
         };

        return (
            <div className="11u 12u$(small)">
                <div id="swap-catalog">
                    {listing()}
                </div>
            </div>
        )
    }
}
