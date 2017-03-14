import React from 'react';
import Voucher from './Voucher';


let Catalog = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul>
                        <li>
                            <Voucher />
                        </li>
                        <li>
                            <Voucher />
                        </li>
                        <li>
                            <Voucher />
                        </li>
                        <li>
                            <Voucher />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

export default Catalog;