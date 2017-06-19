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
                <input type="image" src="/asset/image/credit-card-option.png" width='250px' />
            </StripeCheckout>
        )
    }
};
