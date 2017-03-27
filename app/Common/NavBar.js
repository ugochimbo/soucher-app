import React from 'react';
import {Link} from 'react-router';

let NavBar = React.createClass({
    render: function() {
        return (
            <header id="header">
                <h1><Link to="/">SOU<span style={{"color": "#6a707c"}}>CHER </span></Link></h1>
                <nav>
                    <Link to="/buy/buyer-details" className="button" activeClassName="disabled">Gift A Soucher</Link>
                    <Link to="/swap/verify-code" className="button" activeClassName="disabled">Swap A Soucher</Link>
                    <Link to="/voucher/catalog" className="button" activeClassName="disabled">Voucher Catalog</Link>
                    <Link to="/about-us" className="button" activeClassName="disabled">About Us</Link>
                    <Link to="/contact-us" className="button" activeClassName="disabled">Contact Us</Link>
                </nav>
            </header>
        )
    }
});

export default NavBar;
