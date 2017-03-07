import React from 'react';

let BuyerForm = React.createClass({
    render: function() {
        return (
            <div className="col-md-6">
                <div className="text-center"> Buyer's Contact Details</div>
                <form role="form" action="#">
                    <div className="form-group">
                        <label htmlFor="buyer-name"> Name: </label>
                        <input type="text" className="form-control" id="buyer-name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="buyer-email"> Email: </label>
                    </div>
                    <input type="email" className="form-control" id="buyer-email"/>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
});

export default BuyerForm;
