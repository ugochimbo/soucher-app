import React, {Component} from 'react';

export const ContactDetailsHeader = {
    title: 'Contact Details',
    message: 'Please provide contact details for you and your loved one.',
};

export const SoucherDetailsHeader = {
    title: 'Soucher Details',
    message: 'Customize the soucher with a message and theme.',
};

export const PaymentsPageHeader = {
    title: 'Payments Details',
    message: 'Complete Transaction',
};

export const GiftSoucherSuccessPageHeader = {
    title: 'Payment Successful',
    message: 'Your gift has been sent.',
    thanks: 'On behalf of your loved one, THANK YOU for the gift.',
};

export const TransactionErrorPageHeader = {
    title: 'Transaction Unsuccessful',
    message: "Let's fix it.",
};

export const SoucherCodeVerificationPageHeader = {
    title: 'Please enter your soucher code',
    message: 'You will need your phone for final verification of the swap.',
};

export const SwapCatalogPageHeader = {
    title: 'Select Gift Card(s)',
    message: 'Please select one or more gift cards.',
};

export const PhoneAuthenticationPageHeader = {
    title: 'Authenticate Request',
    message: 'Enter authentication code.',
};

export const SwapSuccessPageHeader = {
    title: 'Swap Successful',
    message: 'Your swap request is successful.',
};

export const SwapCancelledPageHeader = {
    title: 'Swap Cancelled',
    message: 'We hope to hear back from you shortly.',
};

export default class SectionHeader extends Component{
    render() {
        return (
            <header className="major">
                <h2>{this.props.title}</h2>
                <p>
                    {this.props.message}
                </p>
            </header>
        )
    }
}
