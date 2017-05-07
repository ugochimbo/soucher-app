import {
    Add_Contact_Details,
    Add_Payment_Details,
    Add_Soucher_Details
} from './Action';

import {List, Map} from 'immutable';

export default (state = List(), action) => {
    switch(action.type) {
        case Add_Contact_Details:
            return Map({
                buyer: {
                    'name': action.buyer.name,
                    'email': action.buyer.email
                },
                recipient: {
                    'name': action.recipient.name,
                    'email': action.recipient.email,
                    'phone': action.recipient.phone,
                }
            });
        case Add_Soucher_Details:
            return Map({
                soucherValue: action.soucherValue,
                nameOnCard: action.nameOnCard,
                headline: action.headline,
                message: action.message
            });
        case Add_Payment_Details:
            return state;
        default:
            return state;
    }
}
