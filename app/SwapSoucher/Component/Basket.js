import React, {Component} from 'react';
import {reset} from 'redux-form';
import * as Action from '../../action';
import BasketGiftItem from './BasketGiftItem';

export default class Basket extends Component {
     render() {

         const {basket, currency, dispatch, history} = this.props;

         let endTransaction = () => {
             reset('swap-soucher-wizard');
             dispatch(Action.endTransaction(history));
         };

        return (
            <div className="1u 12u$(small)">
                <div id="basket">
                    <section>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Soucher: </td>
                                    <td> {basket.summary.amount.total} {currency} </td>
                                </tr>
                                <tr>
                                    <td>In Use: </td>
                                    <td> {basket.summary.amount.in_use} {currency} </td>
                                </tr>
                                <tr>
                                    <td>Balance: </td>
                                    <td> {basket.summary.amount.total - basket.summary.amount.in_use} {currency} </td>
                                </tr>
                                <tr className='header'>
                                    <td colSpan={2}> Selected Vouchers </td>
                                </tr>

                                <BasketGiftItem name = 'Amazon' value = {'20 ' + currency}/>
                                <BasketGiftItem name = 'H&M' value = {'10 ' + currency}/>
                                <BasketGiftItem name = 'Ebay' value = {'10 ' + currency}/>

                            </tbody>
                        </table>
                    </section>
                    <section className="basket-buttons">
                        <button type="submit" className="button big special">
                            <span> Swap </span>
                            <span  style={{'marginLeft' : '1px'}} className="icon fa-arrow-circle-o-right"/>
                        </button>
                        <button id="sign-out" type="button" className="button big special" onClick={endTransaction}>
                            <span  style={{'marginRight' : '1px'}} className="icon fa-arrow-circle-o-left"/>
                            <span> Cancel </span>
                        </button>
                    </section>
                </div>
            </div>
        )
    }
}
