import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SoucherDetailsHeader as header} from '../../Common/SectionHeader';
import { Field, reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import * as FormField from '../../Common/FormField';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';

const  { DOM: { input } } = React;

const SoucherDetailsPage = (props) => {

    const { handleSubmit, pristine, previousPage, submitting, history } = props;

    let handleFormSubmit = (formProps, dispatch) => {

    };

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <form onSubmit={handleSubmit(handleFormSubmit.bind(this))}>
                    <div className="light-content">
                        <div className="row">
                            <div className="6u 12u$(small)">
                                <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '20px'}} />

                                <div className="row uniform" style={{'marginTop': '10px'}}>
                                    <div className="12u$ actions">
                                        <button type="button" className="button special" onClick={previousPage}>
                                            <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-left"/>
                                            <span> Back </span>
                                            <span  style={{'marginLeft' : '5px'}} className="icon fa-user "/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="6u 12u$(small)">
                                <h3 className="align-center">Soucher Details</h3>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="nameOnCard" type = 'text' component = {FormField.Input} label = 'Name on card (optional)'/>
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px', 'paddingBottom': '50px'}}>
                                    <div className="3u 12u$(small)" style={{"float" : "left" }}>
                                        <Field name="soucherAmount" type = 'number' component = {FormField.Input} label = 'Amount' min="0" step = "10" />
                                    </div>
                                    <div className="3u 12u$(small)" style={{"float" : "left", "marginLeft" : "-15px" }}>
                                        <Field name="soucherCurrency" type = 'text' component = {FormField.Input} label = 'Currency' />
                                    </div>
                                </div>
                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <div className="12u">
                                        <Field name="soucherMessage" component = {FormField.TextArea} label = 'Message (Optional)' rows = '3'/>
                                    </div>
                                </div>
                                <div className="row uniform" style={{'marginTop': '10px'}}>
                                    <CreditCard/>
                                    <PayPal/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

const SoucherDetails = reduxForm({
    form: 'buy-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherDetailsPage);

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoucherDetails);