import React from 'react';
import ContactDetailsForm from '../Component/ContactDetailsForm';

let ContactFormContainer = React.createClass({
    render: function() {
        return (
            <div id="main">
                <ContactDetailsForm />
            </div>
        )
    }
});

export default ContactFormContainer;
