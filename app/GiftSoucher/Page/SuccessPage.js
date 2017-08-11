import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';
import SectionHeader, {GiftSoucherSuccessPageHeader as header} from '../../Common/SectionHeader';
import {Link} from 'react-router-dom';
import * as LINK_TO from '../../config/constant';
import * as Action from '../action';

class SuccessPage extends Component {

    componentWillMount() {
        console.log(this.props.transacting);
        if (!this.props.transacting) {
            console.log(this.props.transacting);
            this.props.history.push(LINK_TO.HOME);
        }
    }

    componentWillUnmount() {
        this.props.dispatch(Action.transacting(false));
        this.props.dispatch(reset('gift-soucher-wizard'));
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
                        <h2 style={{
                            'backgroundImage' : 'url("/asset/image/overlay_2.png")',
                            'textShadow' : '0 1px 0 rgba(0, 0, 0, 0.75)',
                            'backgroundPosition' : 'initial',
                            'backgroundColor' : 'rgba(0, 0, 0, 0.65)',
                            'padding' : '10px'
                        }}>On behalf of your loved one, <br />
                            THANK YOU for the gift.</h2>
                        <p> Soucher Inc </p>
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
}

const mapStateToProps = (state) => {
    return {
        transacting: state.global.transacting,
    }
};

export default connect(
    mapStateToProps,
    null
)(SuccessPage);
