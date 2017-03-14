import React from 'react';
import Soucher from './Soucher';
import SoucherCustomizationForm from './SoucherCustomizationForm';
import Payment from './Payment';

let CustomizeSoucherContainer = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <Soucher />
                            <SoucherCustomizationForm />
                        </div>
                        <div className="row">
                            <Payment />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="btn btn-success btn-lg btn-block" type="button">
                                    Proceed to payment
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default CustomizeSoucherContainer;