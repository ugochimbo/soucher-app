import React from 'react';
import ReadOnlyBasket from '../Component/ReadOnlyBasket';
import PhoneAuth from '../Component/PhoneAuth';

let PhoneAuthContainer = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">
                            <PhoneAuth />
                        </div>
                        <div className="col-md-4">
                            <ReadOnlyBasket />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default PhoneAuthContainer;

