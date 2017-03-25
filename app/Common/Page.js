import React from 'react';

let Page = React.createClass({
    render: function() {
        return (
            <div style={{'marginTop' : '40px'}}>
                {this.props.children}
            </div>
        )
    }
});

export default Page;