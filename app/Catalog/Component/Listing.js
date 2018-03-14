import React, {Component} from 'react';
import GiftCard from './GiftCard';
import Transacting from './../../Common/Transacting';
import * as Random from './../../Util/Random';
import EmptyList from "./EmptyList";

export default class Listing extends Component {

     render() {
         const {catalog, currency, loading} = this.props;

         let listing = () => {

             if (loading && !catalog.length) {
                 return <Transacting message = "Building Catalog..." />
             }

             if (!catalog.length) {
                 return <EmptyList />
             }

             return catalog.map(function (gift_card) {
                 return <GiftCard key = {Random.key()}
                                  gift_card = {gift_card}
                                  currency = {currency}
                    />;
             })
         };

        return (
            <div className="11u 12u$(small)">
                <div id="listing">
                    {listing()}
                </div>
            </div>
        )
    }
}
