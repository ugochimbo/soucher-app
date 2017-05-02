import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactDetailsPage from './Page/ContactDetailsPage';
import SoucherDetailsPage from './Page/SoucherDetailsPage';
import PaymentPage from './Page/PaymentPage';

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1,
        };
    }

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
                {page === 1 && <ContactDetailsPage onSubmit={this.nextPage}/>}
                {page === 2 && <SoucherDetailsPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {page === 3 && <PaymentPage previousPage={this.previousPage} onSubmit={onSubmit} history = {history} />}
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
