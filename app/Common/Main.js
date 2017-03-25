import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

let Main = React.createClass({
    render: function() {
        return (
            <div id="page-wrapper">
                <NavBar />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
});

export default Main;
