import React, {Component} from 'react';
import {reset} from 'redux-form';
import * as Currency from '../../Util/Currency';
import * as Action from '../../action';

export default class Basket extends Component {
     render() {

         const {soucher, dispatch, history} = this.props;

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
                                    <td> {soucher.amount} {Currency.htmlEntityFor(soucher.currency)} </td>
                                </tr>
                                <tr>
                                    <td>In Use: </td>
                                    <td> 40 &euro; </td>
                                </tr>
                                <tr>
                                    <td>Balance: </td>
                                    <td> 10 &euro; </td>
                                </tr>
                                <tr className='header'>
                                    <td colSpan={2}> Selected Vouchers </td>
                                </tr>
                                <tr>
                                    <td> Amazon </td>
                                    <td> 10 &euro; </td>
                                </tr>
                                <tr>
                                    <td> H&M 20 </td>
                                    <td> 40 &euro; </td>
                                </tr>
                                <tr>
                                    <td> Ebay </td>
                                    <td> 10 &euro; </td>
                                </tr>
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
