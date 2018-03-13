import React, {Component} from 'react';
import {reset} from 'redux-form';
import {connect} from 'react-redux';
import SectionHeader, {TransactionErrorPageHeader as header} from '../Common/SectionHeader';
import * as LINK_TO from '../config/constant';
import * as Action from '../Gift/action';

class TransactionError extends Component {

    componentWillMount() {
        if (!this.props.transacting) {
            this.props.history.push(LINK_TO.HOME);
        }
    }

    componentWillUnmount() {
        this.props.dispatch(Action.transacting(false));
        this.props.dispatch(reset('gift-soucher-wizard'));
        this.props.dispatch(reset('swap-soucher-wizard'));
    }

    render() {
        return (
            <div id="main">
                <section id="content" className="default">
                    <SectionHeader title={header.title} message={header.message} />
                </section>

                <section id="banner" className="transaction-error-banner">
                    <header>
                        <h2>
                            Something unusual went wrong. <br />
                            We will contact you shortly.
                        </h2>

                        <p> <span className="highlight"> Transaction Reference: 1112346 </span></p>

                        <p> Thank you for using Soucher. </p>
                    </header>
                </section>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        transacting: state.global.transacting,
    }
};

export default connect(mapStateToProps)(TransactionError);
