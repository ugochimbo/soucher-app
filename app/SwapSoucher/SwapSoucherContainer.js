import React from 'react';
import Catalog from '../Catalog/Catalog';
import PriceSummary from './PriceSummary';
import {Link} from 'react-router';

let SwapSoucherContainer = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-8">
                            <Catalog />
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <PriceSummary />
                                </div>
                                <div className="col-md-12">
                                    Ebay Voucher 10 &euro; <br />
                                    Ebay Voucher 10 &euro; <br />
                                    Ebay Voucher 10 &euro; <br />
                                    Ebay Voucher 10 &euro; <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-default btn-block">
                                        Swap
                                    </button>
                                    <br /><br />
                                    <Link to="/phone-auth" activeStyle={{color: 'red'}}>Swap</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default SwapSoucherContainer;
