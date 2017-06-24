import React, {Component} from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SwapSuccessPageHeader as header} from '../../Common/SectionHeader';
import {Link} from 'react-router-dom';
import * as LINK_TO from '../../config/constant';
import * as STATUS from '../../state/constant';

class SuccessPage extends Component {

    componentWillMount() {
        if (this.props.status !== STATUS.STATUS_COMPLETE) {
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
                    'backgroundImage' : 'url("/asset/image/thank-you.jpg"), url("/asset/image/overlay_2.png")',
                    'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                    'backgroundPosition' : 'initial',
                    'backgroundColor' : 'rgba(0, 0, 0, 0.65)'
                }}>
                    <header>
                        <h2 className="highlight">We have received your swap request.</h2>
                        <p> <span className="highlight"> We will send your gift card(s) shortly. </span></p>
                        <p> <span className="highlight"> Thank you for using Soucher. </span></p>
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
}

const mapStateToProps = (state) => {
    return {
        status: state.swap.status,
    }
};

export default connect(
    mapStateToProps,
    null
)(SuccessPage);

