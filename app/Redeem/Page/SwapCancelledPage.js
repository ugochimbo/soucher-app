import React, {Component} from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SwapCancelledPageHeader as header} from '../../Common/SectionHeader';
import * as LINK_TO from '../../config/constant';
import * as STATUS from '../../state/constant';
import {STATIC_ASSET} from "../../config/constant";

class SwapCancelledPage extends Component {

    componentWillMount() {
        if (this.props.status !== STATUS.STATUS_CANCELLED ) {
            this.props.history.push(LINK_TO.HOME);
        }
    }

    render() {
        return (
            <div id="main">
                <section id="content" className="default">
                    <SectionHeader title={header.title} message={header.message} />
                </section>

                <section id="banner" style={{
                    'backgroundImage' : 'url(' + STATIC_ASSET + '/transaction_error.jpg), url('+ STATIC_ASSET + '/overlay_2.png)',
                    'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                    'backgroundPosition' : 'initial',
                    'backgroundColor' : 'rgba(0, 0, 0, 0.65)',
                    'height' : '449px',
                }}>
                    <header>
                        <h2>The redeem process has been cancelled.</h2>
                        <p> Please feel free to contact us for assistance and/or enquiries.</p>
                        <p> <span className="highlight"> Thank you for using Soucher. </span></p>
                    </header>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.swap.status,
    }
};

export default connect(
    mapStateToProps,
    null
)(SwapCancelledPage);
