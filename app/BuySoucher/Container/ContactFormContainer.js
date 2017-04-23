import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactDetailsForm from '../Component/ContactDetailsForm';

class ContactFormContainer extends Component{
     render() {
        return (
            <div id="main">
                <ContactDetailsForm />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(ContactFormContainer);
