import React from 'react';
import Soucher from './Soucher';
import SoucherCustomizationForm from './SoucherCustomizationForm';
import Payment from './Payment';
import {Link} from 'react-router';
import ProgressSteps from 'react-progress-steps';

let CustomizeSoucherContainer = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <ProgressSteps steps={2} current={2} />
                    </div>
                    <div className="row">
                        <Soucher />
                        <SoucherCustomizationForm />
                    </div>
                    <div className="row">
                        <Payment />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/swap" activeStyle={{color: 'red'}}> ... Demo Swap. </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default CustomizeSoucherContainer;
