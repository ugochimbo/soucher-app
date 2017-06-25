import React, {Component} from 'react';
import { Field } from 'redux-form';
import * as FormField from '../../Common/FormField';

export default class CodeVerificationForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="row uniform">
                    <div className="6u 12u$(small) align-center">
                        <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '20px'}}/>
                    </div>
                    <div className="6u 12u$(small)">
                        <h3>Enter Soucher Code</h3>

                        <div className="6u$" style={{'marginBottom': '10px'}}>
                            <Field name="soucherCode" type="text" component={FormField.Input} label='Enter Soucher Code' />
                        </div>

                        <div className="12u$" style={{'marginBottom': '10px'}}>
                            <p>Your code can be found in the bottom center as seen in the sample image</p>
                        </div>

                        <div className="12u$">
                            <div className="row uniform" style={{'marginBottom': '10px'}}>
                                <div className="12u$ actions">
                                    <button type="submit" className="button big special">
                                        <span> Start my swap </span>
                                        <span style={{'marginLeft': '10px'}} className="icon fa-arrow-circle-o-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}