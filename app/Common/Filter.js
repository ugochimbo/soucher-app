import React, {Component} from 'react';

export default class Filter extends Component {
     render () {
        return (
                <div id="filter" className="row">
                    <div id="category" className="8u 12u$(small)">
                        <div>By Category:</div>
                        <div><a href="" className="selected">Most Popular</a></div>
                        <div><a href="">Charity</a></div>
                        <div><a href="">Food & Drink</a></div>
                        <div><a href="">Electronics</a></div>
                        <div><a href="">Entertainment</a></div>
                        <div><a href="">Fashion</a></div>
                    </div>
                    <div id="search" className="4u 12u$(small)">
                        <input type="text" placeholder="search" />
                    </div>
                </div>
        )
    }
}
