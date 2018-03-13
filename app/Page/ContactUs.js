import React, {Component} from 'react';
import SectionHeader, {ContactUsPageHeader as header} from '../Common/SectionHeader';

export default class ContactUs extends Component{
    render() {
        return (
            <div id="main">

                <section id="banner" className="contact-banner">
                    <section id="content">
                        <SectionHeader title={header.title} message={header.message} />
                    </section>
                </section>

                <section className="spotlight">
                    <header className="major" style={{'marginBottom' : '20px'}}>
                        <h2>Office Address</h2>
                    </header>
                    <div className="content" style={{'fontSize' : 'medium'}}>
                        <p>
                            Somethingstr. 67,
                            65454,
                            Somewhere,
                            Somewhere.
                        </p>
                    </div>
                </section>

                <section className="spotlight">
                    <header className="major" style={{'marginBottom' : '20px'}}>
                        <h2>Phone/Email</h2>
                    </header>
                    <div className="content" style={{'fontSize' : 'medium'}}>
                        <p>Phone : +11111111111</p>
                        <p>Email : cc@soucher.com</p>
                    </div>
                </section>

            </div>
        )
    }
}
