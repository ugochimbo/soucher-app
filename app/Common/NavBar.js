import React from 'react';
import {Link} from 'react-router';

let NavBar = React.createClass({
    render: function() {
        return (
            <header id="header">
                <h1><a href="index.html">SOUCHER <span>Inc.</span></a></h1>
                <nav>
                    <ul className="actions">
                        <li>
                            <Link to="/buy" style={{"color": "#6a707c !important;"}} className="button">
                                Buy A Soucher
                            </Link>
                        </li>
                        <li><Link to="/swap" style={{"color": "#6a707c !important;"}} className="button">Swap A Soucher</Link></li>
                        <li><Link to="/catalog" style={{"color": "#6a707c !important;"}} className="button">Voucher Catalog</Link></li>
                        <li><Link to="/about" style={{"color": "#6a707c !important;"}} className="button">About Us</Link></li>
                        <li><Link to="/contact" style={{"color": "#6a707c !important;"}} className="button">Contact Us</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
});

export default NavBar;
