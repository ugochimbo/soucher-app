import React, {Component} from 'react';

export const ContactDetailsHeader = {
    title: 'Contact Details',
    message: 'Please provide contact details for you and your loved one.',
};

export const SoucherDetailsHeader = {
    title: 'Complete Transaction',
    message: 'Customize the soucher and pay.',
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
    message: 'See sample image for where to find the soucher code on your card.',
};

export const SwapCatalogPageHeader = {
    title: 'Select Gift Card(s)',
    message: 'Please select one or more gift cards.',
};

export const SwapSuccessPageHeader = {
    title: 'Redeem Request Successful',
    message: 'The redeem request is successful.',
};

export const SwapCancelledPageHeader = {
    title: 'Redeem Request Cancelled',
    message: 'We hope to hear back from you shortly.',
};

export const CatalogPageHeader = {
    title: 'Catalog',
    message: 'Our catalog collection is constantly updated.',
};


export const AboutUsPageHeader = {
    title: 'About Us',
    message: 'Vision | Mission | Philosophy',
};

export const ContactUsPageHeader = {
    title: 'Contact Us',
    message: 'Feel free to contact Us for any reason.',
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
