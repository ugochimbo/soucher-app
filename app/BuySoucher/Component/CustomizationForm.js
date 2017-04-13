import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class CustomizationForm extends Component{
     render() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Soucher Details</h2>
                    <p>
                        Customize the soucher with a message and theme.
                    </p>
                </header>
                <div className="light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <img src="/asset/image/soucher_0.png" width="550px" />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3 className="align-center">Soucher Details</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="recipient-name" id="recipient-name" value="" placeholder="Amount" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="email" name="recipient-email" id="recipient-email" value="" placeholder="Theme" />
                                </div>
                                <div className="12u$">
                                    <textarea name="soucher-message" id="soucher-message" placeholder="Enter your message (max 20 characters)" rows="6" />
                                </div>
                            </div>
                        </div>
                        <div className="row uniform" style={{'marginTop': '20px'}}>
                            <div className="12u$">
                                <ul className="actions align-center">
                                    <li>
                                        <Link to="/swap/verify-code" className="button big special">
                                            <span  style={{'marginLeft' : '5px'}} className="icon fa-credit-card "/>
                                            <span> Pay Now </span>
                                            <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </form>
                </div>
            </section>
        )
    }
}
