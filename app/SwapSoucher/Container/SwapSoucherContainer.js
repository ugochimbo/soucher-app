import React from 'react';
import Catalog from '../../Catalog/Catalog';
import PriceSummary from '../Component/PriceSummary';
import {Link} from 'react-router';

let SwapSoucherContainer = React.createClass({
    render: function() {
        return (
            <div id="main">
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
            </div>
        )
    }
});

export default SwapSoucherContainer;
