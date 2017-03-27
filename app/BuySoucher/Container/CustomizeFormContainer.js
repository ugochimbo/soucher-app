import React from 'react';
import CustomizationForm from '../Component/CustomizationForm';

let CustomizeFormContainer = React.createClass({
    render: function() {
        return (
            <div id="main">
                <CustomizationForm />
            </div>
        )
    }
});

export default CustomizeFormContainer;
