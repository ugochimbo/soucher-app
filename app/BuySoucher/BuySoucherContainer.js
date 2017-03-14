import React from 'react';
import BuyerForm from './BuyerForm';
import RecipientForm from './RecipientForm';

let BuySoucherContainer = React.createClass({
    render: function() {
        return (
            <div className="row" style={{"marginTop": "40px"}}>
                <div className="col-md-12">
                    <div className="progress active progress-striped">
                        <div className="progress-bar progress-success">
                        </div>
                    </div>
                    <div className="row">
                        <BuyerForm />
                        <RecipientForm />
                    </div>
                </div>
            </div>
        )
    }
});

export default BuySoucherContainer;