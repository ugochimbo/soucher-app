import React from 'react';
import SwapCatalog from '../Component/SwapCatalog'

let SwapSoucherContainer = React.createClass({
    render: function() {
        return (
            <div id="main-full" className="full">
                <SwapCatalog />
            </div>
        )
    }
});

export default SwapSoucherContainer;
