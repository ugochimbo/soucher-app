import * as Action from '../state/constant';

export const createTransaction = (transactionDetails) => {
    return {
        'type': [Action.Buy_Soucher_Action],
        'payload': {
            request: {
                url:'soucher/gift',
                method: 'POST',
                data: transactionDetails,
            }
        }
    }
};

export const addTransaction = (payment) => {
    return {
        'type': [Action.Add_Transaction_Details],
        'payload': {
            type: payment.type,
            details: payment.details,
        }
    }
};
