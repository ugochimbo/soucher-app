import React, {Component} from 'react';

export default class GiftCard extends Component {
     render() {

         const {gift_card, currency} = this.props;

         let amountSelected = () => {
             console.log(this);
         };

         let denomination = () => {
             return gift_card.denomination.map((denomination) => {
                 return <div key={gift_card.id + '_' + denomination} onClick={amountSelected.bind(this)}>
                            {currency}{denomination}
                     </div>;
             })
         };

         let voucherImage = () => {
             return  (<div className="img">
                        <img src = {`/asset/image/voucher/${gift_card.img_name}`}  />
                    </div>);
         };

        return (
            <div className="item">
                {voucherImage()}
                <div className="amount">
                    <div className="fixed">
                        {denomination()}
                    </div>
                    <div className="custom">
                        <input type="text" placeholder="Enter Custom Amount" />
                    </div>
                </div>
            </div>
        )
    }
}
