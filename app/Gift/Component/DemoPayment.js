import React, {Component} from 'react';
import {PROVIDER_DEMO} from "./Payment";

export default class DemoPayment  extends Component {
    render() {
        const { onSuccess, disabled} = this.props;

        let toggleButton = () => {
            return `row uniform ${disabled}`;
        };

        let testSuccess = () => {
            onSuccess(PROVIDER_DEMO, ['DEMO PAYMENT'])
        };

        return (
            <div className={toggleButton()}>
                <div className="row uniform">
                    <div className="12u$ actions">
                        <button type="button" className="button big special" disabled={disabled} onClick={testSuccess} style={{'width': '300px'}}>
                            <span  style={{'marginLeft' : '2px'}} className="icon fa-money "/>
                            <span> Demo Payment </span>
                            <span  style={{'marginLeft' : '2px'}} className="icon fa-check-circle-o"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
};
