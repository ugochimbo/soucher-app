import React from 'react';
import SectionHeader, {ContactDetailsHeader as header} from '../../Common/SectionHeader';
import { Field, reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import {Input} from '../../Common/FormField';

const  { DOM: { input } } = React;

const ContactDetailsPage = (props) => {
    const { handleSubmit } = props;

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <form onSubmit={handleSubmit}>
                    <div className="light-content">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <h3 className="major">Your Details</h3>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <label>
                                    <Field name="buyerName" id="buyerName" type="text" component = {Input} label = 'Name' />
                                    </label>
                                </div>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="buyerEmail" id="buyerEmail" type="text" component = {Input} label = 'Email'/>
                                </div>
                            </div>
                            <div className="6u 12u$(small)">
                                <h3 className="major">Recipient's Details</h3>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="recipientName" id="recipientName" type="text" component = {Input} label = 'Name'/>
                                </div>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="recipientEmail" id="recipientEmail" type="text" component = {Input} label = 'Email'/>
                                </div>

                                <div className="12u$">
                                    <Field name="recipientPhone" id="recipientPhone" type="tel" component = {Input} label = 'Phone' />
                                </div>
                            </div>
                        </div>
                        <div className="row uniform" style={{'marginBottom': '10px'}}>
                            <div className="12u$ actions align-center">
                                <button type="submit" className="button big special">
                                    <span className="icon fa-gift"/>
                                    <span> Soucher Details </span>
                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
};

export default reduxForm({
    form: 'buy-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(ContactDetailsPage);
