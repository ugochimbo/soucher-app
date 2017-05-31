import React from 'react';
import SectionHeader, {SoucherDetailsHeader as header} from '../../Common/SectionHeader';
import { Field, reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import * as FormField from '../../Common/FormField';

const  { DOM: { input } } = React;

const SoucherDetailsPage = (props) => {
    const { handleSubmit, previousPage } = props;
    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <form onSubmit={handleSubmit}>
                    <div className="light-content">
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '20px'}} />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3 className="align-center">Soucher Details</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="nameOnCard" type = 'text' component = {FormField.Input} label = 'Name on card (optional)'/>
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <div className="6u 12u$(small)">
                                        <Field name="soucherAmount" type = 'number' component = {FormField.Input} label = 'Amount' min="0" step = "10" />
                                    </div>

                                    <div className="6u 12u$(small)">
                                        <Field name="soucherCurrency" type = 'string' component = {FormField.Input} label = 'Currency' />
                                    </div>
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="soucherMessage" component = {FormField.TextArea} label = 'Message' rows = '5'/>
                                </div>
                            </div>
                        </div>

                        <div className="row uniform" style={{'marginTop': '20px'}}>
                            <div className="12u$ actions align-center">
                                <button type="button" className="button big special" onClick={previousPage}>
                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-left"/>
                                    <span> Edit Contact Details </span>
                                    <span  style={{'marginLeft' : '5px'}} className="icon fa-user "/>
                                </button>
                                <button type="submit" className="button big special" style={{'marginLeft' : '20px'}}>
                                    <span  style={{'marginLeft' : '5px'}} className="icon fa-credit-card "/>
                                    <span> Continue To Payment </span>
                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default reduxForm({
    form: 'buy-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherDetailsPage);
