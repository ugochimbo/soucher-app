import React from 'react';

let SoucherCodeContainer = React.createClass({
    render: function() {
        return (
            <div className="container-fluid" style={{'marginTop' : '40px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <form>
                                <label>Soucher Code</label>
                                <input type="text" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="btn btn-success btn-lg btn-block" type="button">
                                    Submit
                                </a>
                            </div>

                            <div>
                                <span>
                                    <sub>*</sub> You will need your phone for final verification of the swap.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default SoucherCodeContainer;
