import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  * as LINK_TO from '../config/constant';

export default class Footer extends Component{
     render() {
        return (
            <section id="footer">
                <div className="inner">
                    <section className="about">
                        <h3>About Us</h3>
                        <p>Something something something something.</p>
                        <ul className="actions">
                            <li>
                                <Link to={LINK_TO.ABOUT_US_ROUTE} className="button">Learn More</Link>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Contact Us</h3>
                        <ul className="contact">
                            <li className="fa-phone">(000) 000-0000</li>
                            <li className="fa-envelope"><a href="#">contact@soucher.com</a></li>
                            <li className="fa-twitter"><a href="#">@SoucherGmbH</a></li>
                            <li className="fa-facebook"><a href="#">facebook.com/SoucherGmbH</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Payment Methods</h3>
                        <p>
                            <img src="../../asset/image/icon_visa.png" width='55px' />
                            <img src="../../asset/image/icon_mastercard.png" width='55px' />
                            <img src="../../asset/image/icon_paypal.png" width='55px' />
                        </p>
                    </section>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; Soucher GmbH. All rights reserved.</p>
                </div>
            </section>
        )
    }
}
