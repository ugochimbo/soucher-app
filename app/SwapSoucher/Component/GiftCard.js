import React, {Component} from 'react';

export default class GiftCard extends Component {
     render() {

         const {gift_card, currency, addToBasket, disabled} = this.props;

         let denomination = () => {
             return gift_card.denomination.map((denomination) => {
                 return <div key={gift_card.id + '_' + denomination} onClick={() => addToBasket(
                        {
                            id: gift_card.id,
                            name: gift_card.name,
                            amount: denomination,
                            value: denomination + ' ' + currency,
                        }
                     )} className ={disabled}>
                            {denomination}{currency}
                     </div>;
             })
         };

         let voucherImage = () => {
             return  (<div className="img">
                        <img src = {`/asset/image/voucher/${gift_card.img_name}`}  />
                    </div>);
         };

         let shouldDisable = () => {
             return (disabled === 'disabled' || gift_card.custom_prize === "0");
         };

         let customPlaceholder = () => {
             let text = 'Custom Amount';

             if (gift_card.custom_prize === "0") {
                 text = 'Custom Amount Unavailable';
             }

             if (disabled) {
                 text = 'Insufficient Soucher Balance'
             }

             return text;
         };

        return (
            <div className="item">
                {voucherImage()}
                <div className="amount">
                    <div className="fixed">
                        {denomination()}
                    </div>
                    <div className="custom">
                        <input type="text" placeholder={customPlaceholder()} disabled={shouldDisable() ? 'disabled' : ''} />
                    </div>
                </div>
            </div>
        )
    }
}
