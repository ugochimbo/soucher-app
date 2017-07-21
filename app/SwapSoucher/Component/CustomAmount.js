import React, {Component} from 'react';

export default class CustomAmount extends Component {
     render() {
         const {giftCard, disabled, max_denomination} = this.props;

         let shouldDisable = () => {
             return (disabled === 'disabled' || !giftCard.custom_prize);
         };

         let customPlaceholder = () => {
             let text = 'Enter Custom Amount';

             if (!giftCard.custom_prize) {
                 text = 'No Custom Amounts';
             }

             if (disabled) {
                 text = 'Insufficient Balance'
             }

             return text;
         };

        return (
            <div className="custom">
                <input type="text" placeholder={customPlaceholder()}
                       disabled={shouldDisable() ? 'disabled' : ''} />
            </div>
        )
    }
}
