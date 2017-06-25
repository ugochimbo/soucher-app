import React, {Component} from 'react';

export default class Footer extends Component{
     render() {
        return (
            <section id="footer">
                <div className="inner">
                    <section className="about">
                        <h3>Soucher Inc</h3>
                        <p>Something something something something.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Get in Touch</h3>
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
                            <img src="../../asset/image/icon_visa.png" width='60px' />
                            <img src="../../asset/image/icon_mastercard.png" width='60px' />
                            <img src="../../asset/image/icon_paypal.png" width='60px' />
                        </p>
                    </section>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; Soucher Inc. All rights reserved.</p>
                </div>
            </section>
        )
    }
}
