import React, {Component} from 'react';
import { Field } from 'redux-form';
import {Input} from '../../Common/FormField';

export default class ContactDetailsForm extends Component{
     render() {
        return (
            <form onSubmit={this.props.onSubmit}>
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

                            <hr className="hide-desktop" />

                            <h3 className="major">Recipient's Details</h3>

                            <div className="12u$" style={{'marginBottom': '10px'}}>
                                <Field name="recipientName" id="recipientName" type="text" component = {Input} label = 'Name'/>
                            </div>

                            <div className="12u$" style={{'marginBottom': '10px'}}>
                                <Field name="recipientEmail" id="recipientEmail" type="text" component = {Input} label = 'Email'/>
                            </div>
                        </div>
                    </div>

                    <hr className="hide-desktop" />

                    <div className="row uniform" style={{'marginBottom': '10px'}}>
                        <div className="12u$ actions align-center">
                            <button type="submit" className="button big special">
                                <span className="icon fa-credit-card"/>
                                <span> Payment </span>
                                <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
