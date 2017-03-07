import React from 'react';
import NavBar from './NavBar';

let Main = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <NavBar />
                {this.props.children}
            </div>
        )
    }
});

export default Main;
