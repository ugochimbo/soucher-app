import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  * as LINK_TO from '../config/constant';

export default class NavBar extends Component{
      render() {
        return (
            <header id="header">
                <h1><Link to="/">SOU<span style={{"color": "#6a707c"}}>CHER </span></Link></h1>
                <nav>
                    <Link to={LINK_TO.GIFT_SOUCHER_ROUTE} className="button"> Gift A Soucher </Link>
                    <Link to={LINK_TO.SWAP_SOUCHER_ROUTE} className="button">Swap A Soucher </Link>
                    <Link to={LINK_TO.TRANSFER_SOUCHER_ROUTE} className="button">Transfer Soucher </Link>
                    <Link to={LINK_TO.GIFT_CARD_CATALOG_ROUTE} className="button">Voucher Catalog</Link>
                </nav>
            </header>
        )
    }
}
