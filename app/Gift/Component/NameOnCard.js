import React, {Component} from 'react';
import { Field } from 'redux-form';
import * as FormField from "../../Common/FormField";

export default class NameOnCard extends Component {
    render() {
        return(
            <div className="12u$" style={{'marginBottom': '10px'}}>
                <div className="9u 10u$(small)" style={{"float" : "left", 'marginBottom': '10px'}}>
                    <Field name="nameOnCard"
                           id = "nameOnCard"
                           type = 'text'
                           component = {FormField.Input}
                           label = 'Name on card (Optional - Max. 14 Characters)'
                           maxlength = "12"
                    />
                </div>
                <div className="1u 1u$(small)" style={{"float" : "left", "marginLeft" : "3px" }}>
                    <a href='#'
                       data-tooltip={"The name to appear in the FROM section of the card; perfect for nicknames."}>
                        <span style={{"color" : "#011A27"}} className="icon fa-2x fa-question-circle"/>
                    </a>
                </div>
            </div>
        )
    }
}
