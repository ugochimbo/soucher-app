import React, {Component} from 'react';

export default class GiftCard extends Component {
     render() {

         const {gift_card, currency, addToBasket, disabled, max_denomination} = this.props;

         let denomination = () => {
             let denominations = gift_card.denomination
                 .filter((denomination) => {
                     return denomination <= max_denomination
                 })
                 .map((denomination) => {
                     return <div key={gift_card.id + '_' + denomination + '_' + new Date().getTime()} onClick={() => addToBasket(
                         {
                             id: gift_card.id,
                             name: gift_card.name,
                             amount: denomination
                         }
                     )} className = {disabled}>
                         {denomination}{currency}
                     </div>;
                 });

             if (!denominations.length) {
                 return <div className = {disabled} key={gift_card.id + '_' + denomination + '_' + new Date().getTime()} />;
             }

             return denominations;
         };

         let voucherImage = () => {
             return  (<div className="img">
                        <img src = {`/asset/image/voucher/${gift_card.img_name}`}  />
                    </div>);
         };

         let shouldDisable = () => {
             return (disabled === 'disabled' || !gift_card.custom_prize);
         };

         let customPlaceholder = () => {
             let text = 'Enter Custom Amount';

             if (!gift_card.custom_prize) {
                 text = 'No Custom Amounts';
             }

             if (disabled) {
                 text = 'Insufficient Balance'
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
