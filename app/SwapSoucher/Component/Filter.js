import React from 'react';

let PhoneAuth = React.createClass({
    render: function () {
        return (
            <div className="2u 12u$(small)">
                <div id="sidebar">
                    <div className="inner">
                        <div className="inner"><h2>Category</h2>
                            <ul className="links">
                                <li><a href="">Most Popular</a></li>
                                <li><a href="">Charity</a></li>
                                <li><a href="">Food & Drink</a></li>
                                <li><a href="">Electronics</a></li>
                                <li><a href="">Entertainment</a></li>
                                <li><a href="">Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default PhoneAuth;
