import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends Component {
    render() {
        return (
            <StripeCheckout
                token = {(token) => {console.log(token);}}
                stripeKey = 'pk_test_W2SpTEwgUKnJLVBZcdnDbQ2e'
                name='Soucher'
                description="Gift Soucher to Loved one"
                ComponentClass="div"
                amount={100}
                currency="USD"
                locale="auto"
                email="test@soucher.com"
                alipay
                bitcoin
                reconfigureOnUpdate={false}
                allowRememberMe = {false}
                billingAddress={true}
            >
                <button type="button" className="button big special">
                    <span  style={{'marginLeft' : '10px'}} className="icon fa-credit-card"/>
                    <span> Pay by Card </span>
                </button>
            </StripeCheckout>
        )
    }
};
