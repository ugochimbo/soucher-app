import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SwapItem from '../Component/SwapItem'

export default class Listing extends Component {
     render() {

        const {catalog, dispatch} = this.props;

        return (
            <div className="11u 12u$(small)">
                <div id="swap-catalog">
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                    <SwapItem />
                </div>
            </div>
        )
    }
}
