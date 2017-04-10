import React from 'react';
import {Link} from 'react-router';
import SwapItem from '../Component/SwapItem'

let Listing = React.createClass({
    render: function () {
        return (
            <div className="8u 12u$(small)">
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
                </div>
                <div className="row uniform" style={{'marginTop': '20px'}}>
                    <div className="12u$">
                        <ul className="actions align-center">
                            <li>
                                <Link to="buy/card-details" className="button big special">
                                    <span> Page 1 of 1 </span>
                                    <span style={{'marginLeft': '10px'}} className="icon fa-arrow-circle-o-right"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

export default Listing;
