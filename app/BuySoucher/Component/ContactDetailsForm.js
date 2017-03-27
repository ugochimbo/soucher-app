import React from 'react';
import {Link} from 'react-router';

let ContactDetailsForm = React.createClass({
    render: function() {
        return (
            <section id="content" className="default">
                <header className="major">
                    <h2>Contact Details</h2>
                    <p>
                        Please provide contact details for you and your loved one.
                    </p>
                </header>
                <div className="content">
                    <form method="post" action="#">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <h3 className="major">Your Details</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="text" name="buyer-name" id="buyer-name" value="" placeholder="Name" />
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <input type="email" name="buyer-email" id="buyer-email" value="" placeholder="Email" />
                                </div>
                            </div>
                            <div className="6u 12u$(small)">
                                    <h3>Your Loved One's Details</h3>
                                    <div className="12u$" style={{'marginBottom': '10px'}}>
                                        <input type="text" name="recipient-name" id="recipient-name" value="" placeholder="Name" />
                                    </div>
                                    <div className="12u$" style={{'marginBottom': '10px'}}>
                                        <input type="email" name="recipient-email" id="recipient-email" value="" placeholder="Email" />
                                    </div>
                                    <div className="12u$" style={{'marginBottom': '10px'}}>
                                        <input type="text" name="recipient-phone" id="recipient-phone" value="" placeholder="Phone" />
                                    </div>
                            </div>
                        </div>
                        <div className="row uniform" style={{'marginTop': '20px'}}>
                            <div className="12u$">
                                <ul className="actions align-center">
                                    <li>
                                        <Link to="buy/card-details" className="button big special">
                                            <span className="icon fa-gift"/>
                                            <span> Gift Card Details </span>
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
});

export default ContactDetailsForm;
