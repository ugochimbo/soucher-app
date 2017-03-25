import React from 'react';

let PriceSummary = React.createClass({
    render: function() {
        return (
            <div>
                Soucher Value: 50 &euro; <br/>
                In Use: 40 &euro; <br/>
                Balance: 10 &euro; <br/>
            </div>
        )
    }
});

export default PriceSummary;