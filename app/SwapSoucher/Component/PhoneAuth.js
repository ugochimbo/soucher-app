import React from 'react';
import {Link} from 'react-router';

let PhoneAuth = React.createClass({
    render: function() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Authenticate Request</h2>
                    <p>
                        Enter authentication code
                    </p>
                </header>
                <div className="light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="6u 12u$(small) align-center">
                                <img src="/asset/image/soucher_code.png" width="350px" />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3>Authentication Code: </h3>
                                <div className="12u$" style={{'marginBottom': '30px'}}>
                                    <input type="text" name="soucher-code" id="soucher-code" />
                                </div>
                                <div className="12u$">
                                    <ul className="actions">
                                        <li>
                                            <Link to="/" className="button big special">
                                                <span> Confirm Swap </span>
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

export default PhoneAuth;
