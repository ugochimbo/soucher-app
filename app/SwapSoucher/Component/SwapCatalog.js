import React from 'react';
import {Link} from 'react-router';

let SwapCatalog = React.createClass({
    render: function() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Select Voucher(s)</h2>
                    <p>
                        Please select one or more vouchers
                    </p>
                </header>
                <div className="light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="10u 12u$(small)">
                                <div className="row uniform">
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                </div>
                                <div className="row uniform">
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                </div>
                                <div className="row uniform">
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                </div>
                                <div className="row uniform">
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                    <img src="/asset/image/soucher_0.png" height="200px" />
                                </div>

                                <div className="row uniform" style={{'marginTop': '20px'}}>
                                    <div className="12u$">
                                        <ul className="actions align-center">
                                            <li>
                                                <Link to="buy/card-details" className="button big special">
                                                    <span> Page 1 of 1 </span>
                                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="2u 12u$(small)">
                                <h3>Shopping Cart</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="recipient-name" id="recipient-name" value="" placeholder="Name" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="email" name="recipient-email" id="recipient-email" value="" placeholder="Email" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="recipient-phone" id="recipient-phone" value="" placeholder="Phone" />
                                </div>

                                <div className="row uniform" style={{'marginTop': '20px'}}>
                                    <div className="12u$">
                                        <ul className="actions align-center">
                                            <li>
                                                <Link to="buy/card-details" className="button big special">
                                                    <span> Swap </span>
                                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
});

export default SwapCatalog;
