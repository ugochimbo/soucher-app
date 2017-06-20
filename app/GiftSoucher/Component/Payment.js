import React, {Component} from 'react';
import CreditCard from '../Component/CreditCard';
import PayPal from '../Component/PayPal';

export default class SoucherValue extends Component {
    render() {
        return (
            <div className="row uniform">
                <CreditCard/>
                <PayPal/>
            </div>
        )
    }
};
