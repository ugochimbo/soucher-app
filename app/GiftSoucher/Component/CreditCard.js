import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends Component {
    render() {
        const { onStripeSuccess, disabled, soucher, contact } = this.props;

        let toggleButton = () => {
            return `row uniform ${disabled}`;
        };

        let toCents = (amount) => {
            return amount * 100;
        };

        return (
            <div className={toggleButton()}>
                <StripeCheckout
                    token = {(token) => onStripeSuccess(token)}
                    stripeKey = 'pk_test_W2SpTEwgUKnJLVBZcdnDbQ2e'
                    name='Soucher GmbH'
                    description={`Soucher payment for ${contact.recipientName}`}
                    ComponentClass="div"
                    amount={toCents(soucher.total)}
                    currency={soucher.currency}
                    locale="auto"
                    email={contact.buyerEmail}
                    reconfigureOnUpdate={false}
                    allowRememberMe = {true}
                    billingAddress={false}
                >
                    <div className="row uniform">
                        <div className="12u$ actions">
                            <button type="button" className="button big special" disabled={disabled}>
                                <span  style={{'marginLeft' : '3px'}} className="icon fa-credit-card "/>
                                <span> Pay with Credit Card </span>
                                <span  style={{'marginLeft' : '3px'}} className="icon fa-credit-card-alt "/>
                            </button>
                        </div>
                    </div>
                </StripeCheckout>
            </div>
        )
    }
};
