import React, {Component} from 'react';
import SectionHeader, {SuccessPageHeader as header} from '../../Common/SectionHeader';
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
                    'backgroundImage' : 'url("/asset/image/sample_header_7.jpg")',
                    'backgroundPosition' : 'initial'
                }}>
                    <header>
                        <h1>On behalf of your loved one, THANK YOU for the gift.</h1>
                    </header>
                    <footer>
                        <ul className="actions fit">
                            <li><Link to = {LINK_TO.GIFT_SOUCHER_ROUTE}  className="button big">
                                <span className="icon fa-gift"/>
                                <span style={{'marginLeft' : '5px'}}>Gift another Soucher</span>
                            </Link></li>
                        </ul>
                    </footer>
                </section>
            </div>
        );
    }
};
