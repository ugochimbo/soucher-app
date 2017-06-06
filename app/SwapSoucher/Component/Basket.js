import React, {Component} from 'react';
import {reset} from 'redux-form';
import * as Action from '../../state/action';
import BasketGiftItem from './BasketGiftItem';

export default class Basket extends Component {
     render() {
         const {basket, currency, removeBasketItem, history} = this.props;

        /* let cancelSwap = () => {
             reset('swap-soucher-wizard');
             dispatch(Action.endTransaction(history));
         };
        */
         let basketGiftItems = () => {
             return basket.items.map(function (item) {
                 return <BasketGiftItem key = {item + '_' + item.amount}
                                        id = {item.id}
                                        name = {item.name}
                                        amount = {item.amount}
                                        currency = {currency}
                                        removeBasketItem = {removeBasketItem}/>;
             })
         };

        return (
            <div className="1u 12u$(small)">
                <div id="basket">
                    <section>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Soucher: </td>
                                    <td> {basket.value} {currency} </td>
                                </tr>
                                <tr>
                                    <td>In Use: </td>
                                    <td> {basket.value - basket.balance} {currency} </td>
                                </tr>
                                <tr>
                                    <td>Balance: </td>
                                    <td> {basket.balance} {currency} </td>
                                </tr>
                                <tr className='header'>
                                    <td colSpan={2} className="align-center"> Gift Cards </td>
                                </tr>

                                {basketGiftItems()}

                            </tbody>
                        </table>
                    </section>
                    <section className="basket-buttons">
                        <button type="submit" className="button big special">
                            <span> Swap </span>
                            <span  style={{'marginLeft' : '1px'}} className="icon fa-arrow-circle-o-right"/>
                        </button>
                        <button id="sign-out" type="button" className="button big special" onClick={() => cancelSwap()}>
                            <span  style={{'marginRight' : '1px'}} className="icon fa-arrow-circle-o-left"/>
                            <span> Cancel </span>
                        </button>
                    </section>
                </div>
            </div>
        )
    }
}
