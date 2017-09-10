import React, {Component} from 'react';
import { Field } from 'redux-form';
import * as FormField from "../../Common/FormField";

export default class NameOnCard extends Component {
    render() {
        return(
            <div className="12u$" style={{'marginBottom': '10px'}}>
                <Field name="nameOnCard"
                       id = "nameOnCard"
                       type = 'text'
                       component = {FormField.Input}
                       label = 'Name on card (Optional - Max. 14 Characters)'
                       maxlength = "12"
                />
            </div>
        )
    }
}
