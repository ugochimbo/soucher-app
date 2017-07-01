import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  * as LINK_TO from '../config/constant';

export default class Home extends Component{
      render() {
        return (
            <div id="main">
                <section id="banner">
                    <header>
                        <h2>Soucher</h2>
                        <p><span>The GIFT CARD for gift cards</span></p>
                    </header>
                    <footer>
                        <ul className="actions fit">
                            <li><Link to = {LINK_TO.GIFT_SOUCHER_ROUTE}  className="button big">
                                <span className="icon fa-gift"/>
                                <span style={{'marginLeft' : '5px'}}>Gift a Soucher</span>
                            </Link></li>
                        </ul>
                    </footer>
                </section>

                <section className="spotlight">
                    <header className="major" style={{'marginBottom' : '20px'}}>
                        <h2>Philosophy</h2>
                    </header>
                    <div className="content" style={{'fontSize' : 'medium'}}>
                        <p>Gift cards has proven to be one of the top gift options. We often opt for a generic,
                            big retail store gift card since we do not know what our loved one really wants.
                            Whilst this is a great option, we seek to reverse the decision by letting our loved ones decide,
                            making you worry less. </p>
                    </div>
                    <div>
                        <header className="major" style={{'textAlign' : 'left'}}>
                            <h2 style={{'textAlign' : 'center'}}><span className="icon fa-certificate"/></h2>
                            Let your loved one decide <br />
                            Worry less <br />
                            Promote small / medium companies <br />
                        </header>
                    </div>
                </section>

                <section className="features">
                    <header className="major" style={{'marginBottom' : '20px'}}>
                        <h2>How to let your loved one decide</h2>
                        <p>... and you worry less</p>
                    </header>
                    <div className="content">
                        <section className="feature">
                            <div style={{'textAlign' : 'center'}}>
                                <img src="/asset/image/giftcard_2.png" height="160px" />
                                <h3> 1. Gift your loved one a Soucher </h3>
                            </div>
                            <p> Survey showed a high percentage of people would trade in a more generic gift card
                                for a specific one based on their current needs. </p>
                        </section>
                        <section className="feature">
                            <div style={{'textAlign' : 'center'}}>
                                <img src="/asset/image/catalog.png" height="160px" />
                                <h3> 2. Loved one views catalogue </h3>
                            </div>
                            <p> Your loved one gifted a Soucher chooses from a high variety of vouchers in our catalogue,
                                just when he/she needs it. </p>
                        </section>
                        <section className="feature">
                            <div style={{'textAlign' : 'center'}}>
                                <img src="/asset/image/swap.png" height="160px" />
                                <h3> 3. Swap Soucher for Voucher(s) </h3>
                            </div>
                            <p> Your loved one swaps the Soucher for one or more vouchers totalling the Soucher value.
                                Don't feel like using up your Soucher value, no problem, your balance will be retained in the
                                Soucher for future swaps. </p>
                        </section>
                    </div>
                </section>
                <section className="cta" style={{'backgroundColor': '#011A27'}}>
                    <header className="major">
                        <h2>Promoting small/medium size companies</h2>
                        <ul className="actions">
                            <li>
                                <Link to = {LINK_TO.GIFT_CARD_CATALOG_ROUTE} className="button big special">
                                    <span style={{'marginRight' : '5px'}}>View Voucher Catalog</span>
                                    <span className="icon fa-book"/>
                                </Link>
                            </li>
                        </ul>
                    </header>
                </section>
                <section className="features">
                    <header className="major">
                        <h2>Customer Testimony</h2>
                        <p> What our customers have to say</p>
                    </header>
                    <div className="content">
                        <section className="feature">
                            <div style = {{'textAlign' : 'center'}}>
                                <span className="icon major"><img src="/asset/image/customer_3.png" width="200px" height="180px" /></span>
                                <h5>From Kiev, Ukraine</h5>
                                <img src="/asset/image/5-stars.png" />
                            </div>
                                <blockquote>
                                    Love the wide choices of vouchers I had to choose from. Didn't even know they exist! Love Soucher.
                                </blockquote>
                        </section>
                        <section className="feature">
                            <div style = {{'textAlign' : 'center'}}>
                                <span className="icon major"><img src="/asset/image/customer_4.jpg" width="200px" height="180px" /></span>
                                <h5>From Tehran, Iran</h5>
                                <img src="/asset/image/4.5-stars.png" />
                            </div>
                                <blockquote>
                                    Got a Soucher from my boss. Its simply awesome, love it.
                                </blockquote>
                        </section>
                        <section className="feature">
                            <div style = {{'textAlign' : 'center'}}>
                                <span className="icon major"><img src="/asset/image/customer_2.jpg" width="200px" height="180px" /></span>
                                <h5>London, United Kingdom</h5>
                                <img src="/asset/image/5-stars.png" />
                            </div>
                                <blockquote>
                                    This saved me a lot of stress. Gifted a friend a Soucher and she still hasn't stopped thanking me for it.
                                </blockquote>
                        </section>
                    </div>
                </section>
                <section className="cta">
                    <header>
                        <h2>What are you waiting for ?</h2>
                    </header>
                    <ul className="actions">
                        <li><Link to = {LINK_TO.GIFT_SOUCHER_ROUTE} className="button big special">
                            <span className="icon fa-gift"/>
                            <span style={{'margin' : '0 10px 0 10px'}}>Gift a loved one a Soucher</span>
                            <span className="icon fa-gift"/>
                        </Link></li>
                    </ul>
                </section>
            </div>
        )
    }
}
