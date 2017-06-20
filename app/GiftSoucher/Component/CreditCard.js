import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends Component {
    render() {

        const {dispatch} = this.props;
        let onToken = (token) => {
            console.log(token);
        };

        return (
            <StripeCheckout
                token = {(token) => onToken(token)}
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
                <div className="row uniform">
                    <div className="12u$ actions">
                        <button type="button" className="button big special">
                            <span  style={{'marginLeft' : '3px'}} className="icon fa-credit-card "/>
                            <span> Pay with Credit Card </span>
                            <span  style={{'marginLeft' : '3px'}} className="icon fa-credit-card-alt "/>
                        </button>
                    </div>
                </div>
            </StripeCheckout>
        )
    }
};
