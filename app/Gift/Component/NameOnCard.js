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
                       label = 'Name on card (Optional)'
                       maxlength = "12"
                       style = {{'width': '90%', 'float': 'left'}}
                />
                <a href='#' style = {{'width': '10%', 'marginLeft': '5px'}}
                   data-tooltip={"The name to appear in the FROM section of the card; perfect for nicknames." +
                   "(Maximum of 14 Characters."}>
                    <span style={{"color" : "#011A27"}} className="icon fa-2x fa-question-circle"/>
                </a>
            </div>
        )
    }
}
