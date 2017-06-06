import React, {Component} from 'react';
import SectionHeader, {SwapCancelledPageHeader as header} from '../../Common/SectionHeader';

export default class SwapCancelledPage extends Component {
    render() {
        return (
            <div id="main">
                <section id="content" className="default">
                    <SectionHeader title={header.title} message={header.message} />
                </section>

                <section id="banner" style={{
                    'backgroundImage' : 'url("/asset/image/transaction_error.jpg"), url("/asset/image/overlay_2.png")',
                    'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                    'backgroundPosition' : 'initial',
                    'backgroundColor' : 'rgba(0, 0, 0, 0.65)',
                    'height' : '449px',
                }}>
                    <header>
                        <h2>Your Swap has been cancelled.</h2>
                        <p> Please feel free to contact us for assistance and/or enquiries.</p>
                        <p> <span  style={{
                            'backgroundImage' : 'url("/asset/image/overlay_2.png")',
                            'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                            'backgroundPosition' : 'initial',
                            'backgroundColor' : 'rgba(0, 0, 0, 0.65)',
                            'padding' : '10px'
                        }}> Thank you for using Soucher. </span></p>
                    </header>
                </section>
            </div>
        );
    }
};
