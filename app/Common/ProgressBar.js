import React from 'react';

let ProgressBar = React.createClass({
    render: function() {
        return (
            <div className="container-fluid" style={{'marginTop' : '40px'}}>
                <div className="progress active progress-striped">
                    <div className="progress-bar progress-success">
                    </div>
                </div>
            </div>
        )
    }
});

export default ProgressBar;
