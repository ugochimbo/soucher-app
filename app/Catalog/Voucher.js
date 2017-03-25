import React from 'react';

let Voucher = React.createClass({
    render: function() {
        return (
            <span style={{'marginRight' : '50px'}}>
                <img alt="Bootstrap Image Preview" src="http://lorempixel.com/140/140/" /> <br />
                <span> Amount: 20 euros </span> <br />
            </span>
        )
    }
});

export default Voucher;
