import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {PaymentsPageHeader as header} from '../../Common/SectionHeader';
import { reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import Checkout from '../../Payment/Stripe/Checkout';

const  { DOM: { input } } = React;

const PaymentPage = (props) => {

    const { handleSubmit, pristine, previousPage, submitting, history } = props;

    let handleFormSubmit = (formProps, dispatch) => {

    };

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title={header.title} message={header.message} />
                <div className="light-content">
                    <form onSubmit={handleSubmit(handleFormSubmit.bind(this))}>
                        <div className="row uniform">
                            <div className="6u 12u$(small)">
                                <img src="/asset/image/soucher_12_1.jpg" width="550px" style={{'marginTop': '60px'}} />
                            </div>
                            <div className="6u 12u$(small)">
                               <Checkout />
                            </div>
                        </div>
                        <div className="row uniform" style={{'marginTop': '20px'}}>
                            <div className="12u$ actions align-center">
                                <button type="button" className="button big special" onClick={previousPage}>
                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-left"/>
                                    <span> Edit Soucher Details </span>
                                    <span  style={{'marginLeft' : '5px'}} className="icon fa-gift"/>
                                </button>
                                <button type="submit" className="button big special" disabled={pristine || submitting} style={{'marginLeft' : '20px'}}>
                                    <span  style={{'marginLeft' : '5px'}} className="icon fa-credit-card "/>
                                    <span> Complete Transaction </span>
                                    <span  style={{'marginLeft' : '10px'}} className="icon fa-arrow-circle-o-right"/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = dispatch => ({});

const Payment = reduxForm({
    form: 'buy-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(PaymentPage);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payment);
