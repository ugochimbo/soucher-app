import React, {Component} from 'react';
import { Field } from 'redux-form';
import * as FormField from '../../Common/FormField';
import SoucherValue from '../Component/SoucherValue';
import Payment from '../Component/Payment';

export default class SoucherDetailsForm extends Component{
     render() {
        const {previousPage, onStripeSuccess, onPalPaySuccess, onSubmit} = this.props;

        return (
            <form onSubmit={onSubmit}>
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

                            <SoucherValue currencies = {['EUR', 'GBP', 'USD']}/>

                            <div className="12u$" style={{'marginBottom': '10px'}}>
                                <div className="12u">
                                    <Field name="soucherMessage" component = {FormField.TextArea} label = 'Message (Optional)' rows = '3'/>
                                </div>
                            </div>

                            <Payment onStripeSuccess = {onStripeSuccess} onPalPaySuccess = {onPalPaySuccess}  />

                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
