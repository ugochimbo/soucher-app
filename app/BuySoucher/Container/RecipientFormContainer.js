import React from 'react';
import ProgressBar from '../../Common/ProgressBar';
import RecipientForm from '../Component/RecipientForm';

let BuyerFormContainer = React.createClass({
    render: function() {
        return (
            <div id="main">
                <ProgressBar />
                <RecipientForm />
            </div>
        )
    }
});

export default BuyerFormContainer;
