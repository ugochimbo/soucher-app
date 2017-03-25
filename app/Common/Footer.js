import React from 'react';

let Footer = React.createClass({
    render: function() {
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
                            <li className="fa-twitter"><a href="#">@soucher</a></li>
                            <li className="fa-facebook"><a href="#">facebook.com/soucher</a></li>
                        </ul>
                    </section>
                    <section>
                        <h3>Mailing Address</h3>
                        <p>Soucher Inc<br/>
                            Barfusstr. 16, 13349<br/>
                            Berlin<br/>
                            Germany</p>
                    </section>
                </div>
                <div className="copyright">
                    <p>Copyright &copy; Soucher Inc. All rights reserved.</p>
                </div>
            </section>
        )
    }
});

export default Footer;