import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  * as LINK_TO from '../config/constant';

export default class NavBar extends Component{
      render() {
        return (
            <header id="header">
                <h1><Link to="/">SOU<span id="cher">CHER </span></Link></h1>
                <nav className='desktop'>
                    <Link to={LINK_TO.GIFT_SOUCHER_ROUTE} className="button">
                        <span className="icon fa-gift" /> Gift
                    </Link>
                    <Link to={LINK_TO.GIFT_CARD_CATALOG_ROUTE} className="button">
                        <span className="icon fa-book" /> Catalog
                    </Link>
                    <Link to={LINK_TO.SWAP_SOUCHER_ROUTE} className="button">
                        <span className="icon fa-money" /> Redeem
                    </Link>
                    <Link to={LINK_TO.ABOUT_US_ROUTE} className="button">
                        <span className="icon fa-group" /> About
                    </Link>
                    <Link to={LINK_TO.CONTACT_US_ROUTE} className="button">
                        <span className="icon fa-phone-square" /> Contact Us
                    </Link>
                </nav>

                <nav className='mobile'>
                    <a href="#menu"><i className="fa fa-bars" aria-hidden="true">
                        <span style={{'marginLeft': '2px'}}>Menu</span> </i></a>
                </nav>

                <nav id="menu">
                    <div className="inner">
                    <h2>
                        <i className="fa fa-bars" aria-hidden="true" />
                        Menu
                        <i className="fa fa-bars" aria-hidden="true" />
                    </h2>
                    <ul className="links">
                        <li>
                            <Link to={LINK_TO.GIFT_SOUCHER_ROUTE}>
                                <span className="icon fa-gift" /> Gift Soucher
                            </Link>
                        </li>
                        <li>
                            <Link to={LINK_TO.GIFT_CARD_CATALOG_ROUTE}>
                                <span className="icon fa-book" /> View Catalog
                            </Link>
                        </li>
                        <li>
                            <Link to={LINK_TO.SWAP_SOUCHER_ROUTE}>
                                <span className="icon fa-money" /> Redeem Soucher
                            </Link>
                        </li>
                        <li>
                            <Link to={LINK_TO.ABOUT_US_ROUTE}>
                                <span className="icon fa-group" /> About Us
                            </Link>
                        </li>
                        <li>
                            <Link to={LINK_TO.CONTACT_US_ROUTE}>
                                <span className="icon fa-phone-square" /> Contact Us
                            </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
