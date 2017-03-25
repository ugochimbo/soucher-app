import React from 'react';
import {Link} from 'react-router';

let RecipientForm = React.createClass({
    render: function() {
        return (
            <div className="col-md-6">
                <div className="text-center"> Recipient's Contact Details </div>
                <form role="form" action="#">
                    <div className="form-group">
                        <label htmlFor="recipient-name"> Name: </label>
                        <input type="text" className="form-control" id="recipient-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-email"> Email: </label>
                        <input type="email" className="form-control" id="recipient-email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-phone"> Phone Number: </label>
                        <input type="email" className="form-control" id="recipient-phone" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
                <Link to="/customize" activeStyle={{color: 'red'}}> ... Customize. </Link>
            </div>
        )
    }
});

export default RecipientForm;
