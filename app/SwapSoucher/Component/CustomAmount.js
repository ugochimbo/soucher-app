import React, {Component} from 'react';

export default class CustomAmount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
        };
    }

    shouldDisable() {
        const {giftCard, disabled} = this.props;

        return (disabled === 'disabled' || !giftCard.custom_prize);
    };

    customPlaceholder() {
        const {giftCard, disabled} = this.props;

        let text = 'Enter Custom Amount';

        if (!giftCard.custom_prize) {
            text = 'No Custom Amounts';
        }

        if (disabled) {
            text = 'Insufficient Balance'
        }

        return text;
    };

    handleKeyChange(event) {
        const {maximumAmount} = this.props;
        const amount = event.target.value;

        if (amount > maximumAmount) {
            return;
        }

        this.setState({
            amount: parseFloat(amount)
        });
    }

    handleSubmit(event) {
        if (event.key.toLowerCase() !== 'enter' || this.state.amount <= 0) {
            return;
        }

        const {giftCard, addToBasket} = this.props;

        addToBasket({
                id: giftCard.id,
                name: giftCard.name,
                amount: this.state.amount
            }
        );

        this.setState({
            amount: 0
        });
    };

    value() {
        return this.state.amount <= 0 ? '' : this.state.amount
    }

    render() {
        return (
            <div className="custom">
                <input type="text" placeholder={::this.customPlaceholder()}
                       disabled={::this.shouldDisable() ? 'disabled' : ''}
                       onChange={this.handleKeyChange.bind(this)}
                       onKeyPress={this.handleSubmit.bind(this)}
                       value = {this.value()}
                />
            </div>
        )
    }
}
