import React from 'react';
import SectionHeader, {SoucherCodeVerificationPageHeader as header} from '../../Common/SectionHeader';
import { Field, reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import * as FormField from '../../Common/FormField';

const  { DOM: { input } } = React;

const SoucherCodeVerificationPage = (props) => {
    const { handleSubmit } = props;

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>

                <div className="light-content">
                    <form onSubmit={handleSubmit}>
                        <div className="row uniform">
                            <div className="6u 12u$(small) align-center">
                                <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '20px'}} />
                            </div>
                            <div className="6u 12u$(small)">
                                <h3>Enter Soucher Code</h3>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <Field name="soucherCode" component = {FormField.Input} label = 'Enter Soucher Code' />
                                </div>

                                <div className="12u$" style={{'marginBottom': '10px'}}>
                                    <p>Your code can be found in the bottom center as seen in the sample image</p>
                                </div>

                                <div className="12u$">
                                    <div className="row uniform" style={{'marginBottom': '10px'}}>
                                        <div className="12u$ actions align-center">
                                            <button type="submit" className="button big special">
                                                <span> Start my swap </span>
                                                <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
};

export default reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherCodeVerificationPage);
