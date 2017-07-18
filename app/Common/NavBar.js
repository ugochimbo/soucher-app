import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  * as LINK_TO from '../config/constant';

export default class NavBar extends Component{
      render() {
        return (
            <header id="header">
                <h1><Link to="/">SOU<span style={{"color": "#6a707c"}}>CHER </span></Link></h1>
                <nav>
                    <Link to={LINK_TO.GIFT_SOUCHER_ROUTE} className="button">
                        <span className="icon fa-gift" /> Gift
                    </Link>
                    <Link to={LINK_TO.GIFT_CARD_CATALOG_ROUTE} className="button">
                        <span className="icon fa-book" /> Catalog
                    </Link>
                    <Link to={LINK_TO.SWAP_SOUCHER_ROUTE} className="button">
                        <span className="icon fa-keyboard-o" /> Swap
                    </Link>
                    <Link to={LINK_TO.ABOUT_US_ROUTE} className="button">
                        <span className="icon fa-group" /> About
                    </Link>
                    <Link to={LINK_TO.CONTACT_US_ROUTE} className="button">
                        <span className="icon fa-phone-square" /> Contact
                    </Link>
                </nav>
            </header>
        )
    }
}
