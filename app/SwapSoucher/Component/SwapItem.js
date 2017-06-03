import React, {Component} from 'react';
import * as Currency from '../../Util/Currency';

export default class SwapItem extends Component {
     render() {

         const {voucher} = this.props;

         let denomination = () => {
             return voucher.denomination.map((denomination) => {
                 return <div key={voucher.id + '_' + denomination} onClick={()=> {
                     console.log('Voucher Id: ' + voucher.id + ' => Amount ' + denomination);
                 }}> {Currency.htmlEntityFor(voucher.currency) + '' + denomination} </div>;
             })
         };

         let voucherImage = () => {
             return  (<div className="img">
                        <img src = {`/asset/image/voucher/${voucher.img_name}`}  />
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
