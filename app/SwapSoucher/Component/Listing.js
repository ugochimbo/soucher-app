import React, {Component} from 'react';
import SwapItem from '../Component/SwapItem';

export default class Listing extends Component {

     render() {

         const {catalog, dispatch} = this.props;

         let swapItemList = () => {
             return catalog.vouchers.map(function (voucher) {
                 return <SwapItem key = {voucher.id} voucher = {voucher} />;
             })
         };

        return (
            <div className="11u 12u$(small)">
                <div id="swap-catalog">
                    {swapItemList()}
                </div>
            </div>
        )
    }
}
