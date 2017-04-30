import React, {Component} from 'react';

export default class ContactDetailsForm extends Component{
     render() {
        return (
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
        )
    }
}
