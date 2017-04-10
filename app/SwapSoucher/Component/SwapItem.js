import React from 'react';

let SwapItem = React.createClass({
    render: function() {
        return (
            <div className="item">
                <div className="img">
                    <img src="/asset/image/hm.png" />
                </div>
                <div className="amount">
                    <div className="fixed">
                        <div> &euro;10 </div>
                        <div> &euro;20</div>
                        <div> &euro;50</div>
                        <div> &euro;100</div>
                    </div>
                    <div className="custom">
                        <input type="text" placeholder="Enter Custom Amount" style={{'backgroundColor' : 'inherit'}}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default SwapItem;
