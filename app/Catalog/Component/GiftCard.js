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

             return 'Enter Custom Amount';
         };

        return (
            <div className="item">
                {voucherImage()}
                <div className="amount">
                    <div className="fixed">
                        {denomination()}
                    </div>
                    <div className="custom">
                        <input type="text" placeholder={customPlaceholder()} />
                    </div>
                </div>
            </div>
        )
    }
}
