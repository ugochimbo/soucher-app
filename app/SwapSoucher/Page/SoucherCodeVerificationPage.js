import React from 'react';
import {connect} from 'react-redux';
import SectionHeader, {SoucherCodeVerificationPageHeader as header} from '../../Common/SectionHeader';
import {reduxForm } from 'redux-form';
import {validator as validate} from '../Validator';
import CodeVerificationForm from '../Component/CodeVerificationForm';
import * as Action from '../action';
import {SUCCESS_RESPONSE_CODE} from '../../state/constant';

const  { DOM: { input } } = React;

const SoucherCodeVerificationPage = (props) => {

    const {handleSubmit} = props;

    return (
        <div id="main">
            <section id="content" className="default">
                <SectionHeader title = {header.title} message = {header.message}/>
                <div className="light-content">
                    <CodeVerificationForm onSubmit = {handleSubmit.bind(this)} />
                </div>
            </section>
        </div>
    )
};

const SoucherCodeVerification = reduxForm({
    form: 'swap-soucher-wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SoucherCodeVerificationPage);

const mapStateToProps = (state) => {
    const {swap} = state;
    return {
        soucher: swap.soucher
    }
};

const mapDispatchToProps = (dispatch, handleSubmit) => ({
    onSubmit: (values) => {
        dispatch(Action.fetchSoucher(values)).then((response) => {
            if (response.payload.data.status === SUCCESS_RESPONSE_CODE) {
                handleSubmit.onSubmit();
            } else {

            }
        });
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SoucherCodeVerification);