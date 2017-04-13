import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ContactDetailsForm extends Component{
     render() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Contact Details</h2>
                    <p>
                        Please provide contact details for you and your loved one.
                    </p>
                </header>
                <div className="light-content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <h3 className="major">Your Details</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="buyer-name" id="buyer-name" placeholder="Name" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="email" name="buyer-email" id="buyer-email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="6u 12u$(small)">
                                    <h3>Your Loved One's Details</h3>
                                    <div className="12u$" style={{'marginBottom': '10px'}}>
                                        <input type="text" name="recipient-name" id="recipient-name" placeholder="Name" />
                                    </div>
                                    <div className="12u$" style={{'marginBottom': '10px'}}>
                                        <input type="email" name="recipient-email" id="recipient-email" placeholder="Email" />
                                    </div>
                                    <div className="12u$" style={{'marginBottom': '10px'}}>
                                        <input type="text" name="recipient-phone" id="recipient-phone" placeholder="Phone" />
                                    </div>
                            </div>
                        </div>
                        <div className="row uniform" style={{'marginTop': '20px'}}>
                            <div className="12u$">
                                <ul className="actions align-center">
                                    <li>
                                        <Link to="/buy/card-details" className="button big special">
                                            <span className="icon fa-gift"/>
                                            <span> Soucher Details </span>
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
