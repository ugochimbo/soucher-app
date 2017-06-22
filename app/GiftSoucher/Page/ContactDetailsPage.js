import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {ContactDetailsHeader as header} from '../../Common/SectionHeader';
import { reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import ContactDetailsForm from '../Component/ContactDetailsForm';

const  { DOM: { input } } = React;

const ContactDetailsPage = (props) => {
    const { handleSubmit } = props;

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <ContactDetailsForm onSubmit = {handleSubmit.bind(this)} />
            </section>
        </div>
    )
};

const ContactDetails = reduxForm({
    form: 'buy_soucher_wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(ContactDetailsPage);

export default connect(null, null)(ContactDetails);
