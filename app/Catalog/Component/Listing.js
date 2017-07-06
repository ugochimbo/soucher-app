import React, {Component} from 'react';
import GiftCard from './GiftCard';
import Transacting from './../../Common/Transacting';
import * as Random from './../../Util/Random';

export default class Listing extends Component {

     render() {
         const {catalog, currency} = this.props;

         let listing = () => {

             if (!catalog.length) {
                 return <Transacting message = "Building Catalog" />
             }

             return catalog.map(function (gift_card) {
                 return <GiftCard key = {Random.key()}
                                  gift_card = {gift_card}
                                  currency = {currency}
                    />;
             })
         };

        return (
            <div className="12u">
                <div id="listing" >
                    {listing()}
                </div>
            </div>
        )
    }
}
