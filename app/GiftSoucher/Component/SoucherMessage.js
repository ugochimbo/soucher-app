import React, {Component} from 'react';
import { Field } from 'redux-form';
import * as FormField from "../../Common/FormField";

export default class SoucherMessage extends Component {
    render() {
        const {flipCard} = this.props;

        return(
            <div className="12u$" style={{'marginBottom': '10px'}}>
                <div className="12u">
                    <Field name = "soucherMessage"
                           id = "soucherMessage"
                           maxlength="40"
                           component = {FormField.TextArea}
                           label = 'Message (Optional)'
                           rows = '3'
                           onFocus = {() => flipCard(true)}
                           onBlur = {() => flipCard(false)}
                    />
                </div>
            </div>
        )
    }
}
