import React, {Component} from 'react';
import SectionHeader, {AboutUsPageHeader as header} from '../Common/SectionHeader';

export default class AboutUs extends Component{
    render() {
        return (
            <div id="main">

                <section id="banner" className="about-banner">
                    <section id="content">
                        <SectionHeader title={header.title} message={header.message} />
                    </section>
                </section>

                <section className="spotlight">
                    <header className="major" style={{'marginBottom' : '20px'}}>
                        <h2>Mission</h2>
                    </header>
                    <div className="content" style={{'fontSize' : 'medium'}}>
                        <p>We are a company which looks to expand and evolve the gift card industry.
                            Gift cards are important to us because of what gifts stand for - joy, love, appreciation and
                            alliance amongst others.. </p>
                    </div>
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
                            Promote small & medium companies <br />
                        </header>
                    </div>
                </section>

            </div>
        )
    }
}
