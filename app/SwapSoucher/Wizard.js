import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoucherCodeVerificationPage from './Page/SoucherCodeVerificationPage';
import SwapCatalogPage from './Page/SwapCatalogPage';
import PhoneAuthenticationPage from './Page/PhoneAuthenticationPage';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    };

   /* handleNextWithValidate = values => new Promise((resolve, reject) => {
        submit(values).then(() => {
            this.nextPage();
            resolve();
        });
    });

    handleSubmitWithValidate = values => new Promise((resolve, reject) => {
        submitValidate(values).then(() => {
            this.props.onSubmit(values);
            resolve();
        });
    });*/

    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        const history = this.context.router.history;

        return (
            <div>
                {page === 1 && <SoucherCodeVerificationPage onSubmit={this.nextPage}/>}
                {page === 2 && <SwapCatalogPage previousPage={this.previousPage} onSubmit={this.nextPage} />}
                {page === 3 && <PhoneAuthenticationPage previousPage={this.previousPage} onSubmit={onSubmit} history = {history} />}
            </div>
        )
    }
}

Wizard.propTypes = {
    onSubmit: PropTypes.func
};

Wizard.contextTypes = {
    router: PropTypes.object.isRequired
};

export default Wizard;
