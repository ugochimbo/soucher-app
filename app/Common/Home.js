import React from 'react';

let Home = React.createClass({
    render: function() {
        return (
            <div id="main">
                <section id="banner">
                    <header>
                        <h2>Soucher</h2>
                        <p>The GIFT CARD for gift cards</p>
                    </header>
                    <footer>
                        <ul className="actions fit">
                            <li><a href="#" className="button big">BUY A SOUCHER</a></li>
                        </ul>
                    </footer>
                </section>
                <section className="features">
                    <header className="major">
                        <h2>What we do?</h2>
                        <p>We let them decide. Here is how:</p>
                    </header>
                    <div className="content">
                        <section className="feature">
                            <span className="icon major fa-diamond" />
                            <h3>Gift a loved one a Soucher</h3>
                            <p>
                                Survey showed a high percentage of people would trade in a more generic gift card
                                for a specific one based on their current needs.
                            </p>
                        </section>
                        <section className="feature">
                            <span className="icon major fa-save" />
                            <h3>Loved one views catalogue</h3>
                            <p> Your loved oe gifted a Soucher chooses from a high variety of vouchers in our catalogue. </p>
                        </section>
                        <section className="feature">
                            <span className="icon major fa-newspaper-o" />
                            <h3>Swap for Voucher(s)</h3>
                            <p>
                                He or she then swaps the Soucher for one or more vouchers totalling the Soucher value.
                                Don't feel like using up your Soucher value, no problem, your balance will be retained in the
                                Soucher for future swaps.
                            </p>
                        </section>
                    </div>
                </section>
                <section className="cta">
                    <header>
                        <h2>View available vouchers</h2>
                    </header>
                    <ul className="actions">
                        <li><a href="#" className="button big">View Catalogue</a></li>
                    </ul>
                </section>
                <section className="features">
                    <header className="major">
                        <h2>Customer Testimony</h2>
                        <p> What our customers have to say</p>
                    </header>
                    <div className="content">
                        <section className="feature">
                            <div className="align-center">
                                <span className="icon major"><img src="/app/image/customer_3.png" width="200px" height="180px" /></span>
                                <h5>From Kiev, Ukraine</h5>
                                <img src="/app/image/5-stars.png" />
                            </div>
                            <p> Love the wide choices of vouchers I had to choose from. Didn't even know they exist! Love Soucher.</p>
                        </section>
                        <section className="feature">
                            <div className="align-center">
                                <span className="icon major"><img src="/app/image/customer_4.jpg" width="200px" height="180px" /></span>
                                <h5>From Tehran, Iran</h5>
                                <img src="/app/image/4.5-stars.png" />
                            </div>
                            <p> Got a Soucher from my boss. Its simply awesome, love it.</p>
                        </section>
                        <section className="feature">
                            <div className="align-center">
                                <span className="icon major"><img src="/app/image/customer_2.jpg" width="200px" height="180px" /></span>
                                <h5>London, United Kingdom</h5>
                                <img src="/app/image/5-stars.png" />
                            </div>
                            <p>This saved me a lot of stress. Gifted a friend a Soucher and she still hasn't stopped thanking me for it.</p>
                        </section>
                    </div>
                </section>
                <section className="cta">
                    <header>
                        <h2>Gift Someone a Soucher</h2>
                    </header>
                    <ul className="actions">
                        <li><a href="#" className="button big"> Buy A Soucher </a></li>
                    </ul>
                </section>
            </div>
        )
    }
});

export default Home;
