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

export const SuccessPageHeader = {
    title: 'Payment Successful',
    message: 'Your gift has been sent.',
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
