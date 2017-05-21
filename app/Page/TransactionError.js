import React, {Component} from 'react';
import SectionHeader, {TransactionErrorPageHeader as header} from '../Common/SectionHeader';

export default class TransactionError extends Component {
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
                    'backgroundColor' : 'rgba(0, 0, 0, 0.65)'
                }}>
                    <header>
                        <h2>
                            Something went wrong with this transaction. <br />
                            Please call or email us.
                        </h2>

                        <p> <span  style={{
                            'backgroundImage' : 'url("/asset/image/overlay_2.png")',
                            'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                            'backgroundPosition' : 'initial',
                            'backgroundColor' : 'rgba(0, 0, 0, 0.65)',
                            'padding' : '10px'
                        }}> Transaction Reference: 1112346 </span></p>

                        <p> Thank you for using Soucher. </p>
                    </header>
                </section>
            </div>
        );
    }
};
