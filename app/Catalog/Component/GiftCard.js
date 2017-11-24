import React, {Component} from 'react';
import * as Random from '../../Util/Random';

export default class GiftCard extends Component {
     render() {

         const {gift_card, currency} = this.props;

         let denomination = () => {
             return gift_card.denomination
                 .map((denomination) => {
                     return <div key={Random.key()}>
                         {denomination}{currency}
                     </div>;
                 });
         };

         let voucherImage = () => {
             return  (<div className="img">
                        <img src = {`/asset/image/voucher/${gift_card.img_name}`}  />
                    </div>);
         };


         let customPlaceholder = () => {

             if (!gift_card.custom_prize) {
                 return 'No Custom Amounts';
             }

             return 'Custom Amount Available';
         };

         let className = () => {
             if (!gift_card.custom_prize) {
                 return 'custom-unavailable';
             }

             return 'custom-available';
         };

        return (
            <div className="item">
                {voucherImage()}
                <div className="amount">
                    <div className="fixed disabled">
                        {denomination()}
                    </div>
                    <div className="custom disabled">
                        <input id="catalog-item" type="text" placeholder={customPlaceholder()} className={className()} />
                    </div>
                </div>
            </div>
        )
    }
}
