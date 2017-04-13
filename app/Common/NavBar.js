import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component{
      render() {
        return (
            <header id="header">
                <h1><Link to="/">SOU<span style={{"color": "#6a707c"}}>CHER </span></Link></h1>
                <nav>
                    <Link to="/buy/buyer-details" className="button">Gift A Soucher</Link>
                    <Link to="/swap/verify-code" className="button">Swap A Soucher</Link>
                    <Link to="/voucher/catalog" className="button">Voucher Catalog</Link>
                    <Link to="/about-us" className="button">About Us</Link>
                    <Link to="/contact-us" className="button">Contact Us</Link>
                </nav>
            </header>
        )
    }
}
