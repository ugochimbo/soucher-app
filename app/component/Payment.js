import React from 'react';

let Payment = React.createClass({
    render: function() {
        return (
            <div className="col-md-12">
                <div className="btn-group btn-group-lg">
                    <button className="btn btn-default" type="button">
                        <em className="glyphicon glyphicon-align-left" /> Left
                    </button>
                    <button className="btn btn-default" type="button">
                        <em className="glyphicon glyphicon-align-center" /> Center
                    </button>
                    <button className="btn btn-default" type="button">
                        <em className="glyphicon glyphicon-align-right" /> Right
                    </button>
                    <button className="btn btn-default" type="button">
                        <em className="glyphicon glyphicon-align-justify" /> Justify
                    </button>
                </div>
            </div>
        )
    }
});

export default Payment;
