import React from 'react';

let SwapSoucherContainer = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8">

                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        Soucher Value Details
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <button type="button" className="btn btn-default btn-block">
                                            Swap
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default SwapSoucherContainer;
