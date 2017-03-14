import React from 'react';
import {Link} from 'react-router';

let NavBar = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-12" style={{"marginBottom": "20px"}}>
                    <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand" >Soucher</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <Link to="/buy" activeStyle={{color: 'red'}}>Buy</Link>
                                </li>
                                <li>
                                    <Link to="/swap" activeStyle={{color: 'red'}}>Swap</Link>
                                </li>
                                <li>
                                    <Link to="/catalog" activeStyle={{color: 'red'}}>Catalog</Link>
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