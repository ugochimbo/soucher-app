import React from 'react';
import {Link} from 'react-router';

let ValidateSoucherForm = React.createClass({
    render: function() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Please enter your soucher code</h2>
                    <p>
                        You will need your phone for final verification of the swap.
                    </p>
                </header>
                <div className="light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="6u 12u$(small) align-center">
                                <img src="/asset/image/soucher_code.png" width="350px" />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3>Enter Soucher Code</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="soucher-code" id="soucher-code" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <p>Your code can be found in the bottom right corner as seen in the sample image</p>
                                </div>
                                <div className="12u$">
                                    <ul className="actions">
                                        <li>
                                            <Link to="swap/catalog" className="button big special">
                                                <span> Start my swap </span>
                                                <span  style={{'marginLeft' : '5px'}} className="icon fa-arrow-circle-o-right"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
});

export default ValidateSoucherForm;
