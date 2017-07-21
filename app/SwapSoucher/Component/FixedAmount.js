import React, {Component} from 'react';
import * as Random from '../../Util/Random';

export default class FixedAmount extends Component {
     render() {

         const {giftCard, currency, addToBasket, disabled, maximumAmount} = this.props;

         let denomination = () => {
             let denominations = giftCard.denomination
                 .filter((denomination) => {
                     return denomination <= maximumAmount
                 })
                 .map((denomination) => {
                     return <div key={Random.key()} onClick={() => addToBasket(
                         {
                             id: giftCard.id,
                             name: giftCard.name,
                             amount: denomination
                         }
                     )} className = {disabled}>
                         {denomination}{currency}
                     </div>;
                 });

             if (!denominations.length) {
                 return <div className = {disabled + ' no-price'} key={Random.key()} />;
             }

             return denominations;
         };

        return (
            <div className="fixed">
                {denomination()}
            </div>
        )
    }
}
