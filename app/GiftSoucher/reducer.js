import * as Action from '../state/constant';

let initial_state = {
    buyer : {},
    recipient : {},
    soucher : {
        amount: 1,
        currency: 'EUR'
    },
    payment : {},
    status: 'stated',
};

export const GiftReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Action.Update_Gift_Contact_Details:
            return {
                ...state,
                'buyer': action.payload.buyer,
                'recipient': action.payload.recipient,
            };
        case Action.Update_Gift_Soucher_Details:
            return {
                ...state,
                'gift': action.payload.gift,
            };
        case Action.Add_Transaction_Details:
            return {
                ...state,
                'transaction': action.payload.transaction,
            };
        case Action.Cancel_Gift_Action:
            return  {
                ...state,
                'payment': initial_state.payment,
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