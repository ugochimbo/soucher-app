import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';

//import { paymentAuthorized, paymentCancelled } from '../../actions';

class PayPalButton extends Component {
    constructor(props) {
        super(props);
        window.React = React;
        window.ReactDOM = ReactDOM;
        this.state = {
            showButton: false,
            show: false
        }
    }

    componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
        if (!this.state.show) {
            if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
                if (isScriptLoadSucceed) {
                    this.setState({ showButton: true });
                }
                else this.props.onError()
            }
        }
    }

    componentDidMount () {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ showButton: true })
        }
    }

    componentWillUnmount() {
        delete window.React;
        delete window.ReactDOM
    }

    render() {
        const client = {
            sandbox:    'AY-FHTiPMPYyspk1d3Ku61n4afmMMjj3ZaABqW4bNdRs3aKE8YPM0EkAUlEAWVKy43MhvmIN_7Ck_Q7S',
            production: 'AcugBnf0ZIY2mgMtH92WWLbCG-tfj8gayXTTBJeDX7B_Yoe4SZv-9yKANbMQIImRcpjxHsWY2Nf4Syg3',
        };

        const payment = (data, actions) => {
            return actions.payment.create({
                transactions: [
                    {
                        amount: {
                            total:    '1.00',
                            currency: 'USD'
                        }
                    }
                ]
            });
        };

        const onAuthorize = (data, actions) => {
            return actions.payment.execute().then(() => {
                console.log(data);
                const payment = Object.assign({}, this.props.payment);
                payment.paid = true;
                payment.cancelled =  false;
                payment.payerID =  data.payerID;
                payment.paymentID =  data.paymentID;
                payment.paymentToken =  data.paymentToken;
                payment.returnUrl =  data.returnUrl;
               // this.props.dispatch(paymentAuthorized(payment))
            })
        };

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
           // this.props.dispatch(paymentCancelled())
        };

        const displayPayPalButton = () => {
            if (this.state.showButton) {
                return <paypal.Button.react
                    env={'sandbox'}
                    client={client}
                    payment={payment}
                    commit={true}
                    onAuthorize={onAuthorize}
                    onCancel={onCancel}
                    style={
                        {
                            label: 'pay',
                            size:  'responsive',
                            shape: 'rect',
                            color: 'blue'
                        }
                    }
                />
            }

            return <div />;
        };

        return (
            <div style={{'width' : '250px' , 'marginTop' : '20px'}} >
                {displayPayPalButton()}
            </div>
        );
    }
}

export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PayPalButton)