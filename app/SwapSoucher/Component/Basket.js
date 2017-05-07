import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Basket extends Component {
     render() {
        return (
            <div className="1u 12u$(small)">
                <div id="basket">
                    <section>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Soucher Value: </td>
                                    <td> 50 &euro; </td>
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
                    <section>
                        <button type="submit" className="button big special">
                            <span> Swap </span>
                            <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                        </button>
                    </section>
                </div>
            </div>
        )
    }
}
