import React from 'react';

let NavBar = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12" style={{"marginBottom": "20px"}}>
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle"
                                    data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar">Buy</span>
                                <span className="icon-bar">Swap</span>
                                <span className="icon-bar">Catalog</span>
                            </button> <a className="navbar-brand" href="#">Soucher</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <a href="#">Buy</a>
                                </li>
                                <li>
                                    <a href="#">Swap</a>
                                </li>
                                <li>
                                    <a href="#">Catalog</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
});

export default NavBar;