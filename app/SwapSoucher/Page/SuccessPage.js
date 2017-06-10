import React, {Component} from 'react';
import SectionHeader, {SwapSuccessPageHeader as header} from '../../Common/SectionHeader';
import {Link} from 'react-router-dom';
import * as LINK_TO from '../../config/constant';

export default class SuccessPage extends Component {
    render() {
        return (
            <div id="main">
                <section id="content" className="default">
                    <SectionHeader title={header.title} message={header.message} />
                </section>

                <section id="banner" style={{
                    'backgroundImage' : 'url("/asset/image/thank-you.jpg"), url("/asset/image/overlay_2.png")',
                    'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                    'backgroundPosition' : 'initial',
                    'backgroundColor' : 'rgba(0, 0, 0, 0.65)'
                }}>
                    <header>
                        <h2 className="highlight">
                            Success! We will send you your gift cards shortly. <br />
                        </h2>
                        <h1 className="highlight"> Thank you for using Soucher! </h1>
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
            </div>
        );
    }
};
