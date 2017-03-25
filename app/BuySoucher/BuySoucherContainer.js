import React from 'react';
import BuyerForm from './BuyerForm';
import RecipientForm from './RecipientForm';
import ProgressSteps from 'react-progress-steps';

let BuySoucherContainer = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="row">
                    <div className="col-md-12">
                        <ProgressSteps steps={2} current={1} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <BuyerForm />
                        <RecipientForm />
                    </div>
                </div>
            </div>
        )
    }
});

export default BuySoucherContainer;