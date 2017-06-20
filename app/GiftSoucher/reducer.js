import * as Action from '../state/constant';
import * as Worker from '../state/worker';

let initialState = {
    buyer: {
        name: '',
        email: '',
    },
    recipient : {
        name: '',
        email: '',
        phone: '',
    },
    gift : {
        name_on_card: '',
        message: '',
        amount: 0 ,
        currency: ''
    },
    payment: {
        type: '',
        data: {}
    },
    status: ''
};

export const GiftReducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Update_Gift_Contact_Details:
            return {
                ...state,
                'buyer': Worker.buyerDetails(state.buyer, action.payload),
                'recipient': Worker.recipientDetails(state.recipient, action.payload),
            };
        case Action.Update_Gift_Soucher_Details:
            return {
                ...state,
                'gift': Worker.updateGiftDetails(state.gift, action.payload),
            };
        case Action.Add_Payment_Details:
            return  {
                ...state,
                'catalog': Worker.addPaymentDetails(state.payment, action.payload),
            };
        case Action.Cancel_Gift_Action:
            return  {
                ...state,
                'payment': initialState.payment,
                'status': Action.STATUS_CANCELLED,
            };
        case Action.Complete_Gift_Success:
            return  {
                ...state,
                'status': Action.STATUS_COMPLETE,
            };
        default:
            return state;
    }
};