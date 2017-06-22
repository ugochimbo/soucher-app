import React, {Component} from 'react';
import * as FormField from '../../Common/FormField';
import { Field } from 'redux-form';

export default class SoucherValue extends Component {
    render() {
        const { currencies } = this.props;

        return (
            <div className="12u$" style={{'marginBottom': '10px', 'paddingBottom': '50px'}}>
                <div className="3u 12u$(small)" style={{"float" : "left" }}>
                    <Field name="soucherAmount" type = 'number' component = {FormField.Input} label = 'Amount' min="0" step = "10" />
                </div>
                <div className="3u 12u$(small)" style={{"float" : "left", "marginLeft" : "-8px" }}>
                    <div className="select-wrapper">
                        <Field name="soucherCurrency" id = "soucherCurrency" component = {FormField.DropDown} label = 'Currency' options = {currencies} />
                    </div>
                </div>
            </div>
        )
    }
};
