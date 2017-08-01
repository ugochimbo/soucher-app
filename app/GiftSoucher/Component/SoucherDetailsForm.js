import React, {Component} from 'react';
import Transacting from '../../Common/Transacting';
import SoucherContainer from "../Page/SoucherContainer";
import PaymentContainer from "../Page/PaymentContainer";

export default class SoucherDetailsForm extends Component{
     render() {
        const {previousPage, onStripeSuccess, onPalPaySuccess, onSubmit, formState, transacting} = this.props;
        const soucher = {
            amount:  formState.values.soucherAmount,
            currency:  formState.values.soucherCurrency
        };

        const contact = {
            buyerName: formState.values.buyerName,
            buyerEmail: formState.values.buyerEmail,
            recipientName: formState.values.recipientName,
        };

        let isTransacting = () => {
            if (transacting) {
                return <Transacting message = "Finalizing Transaction" />
            }

            return '';
        };

        return (
            <form onSubmit={onSubmit()}>
                <div className="light-content">
                    <div className="row">
                        <SoucherContainer backButtonOnClick = {previousPage}/>
                        <PaymentContainer
                            onStripeSuccess = {onStripeSuccess}
                            onPalPaySuccess = {onPalPaySuccess}
                            soucher = {soucher}
                            contact = {contact}
                        />
                    </div>
                </div>
                {isTransacting()}
            </form>
        )
    }
}
