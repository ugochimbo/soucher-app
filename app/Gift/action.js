import * as Action from '../state/constant';

export const createTransaction = (transaction) => {
    return {
        'type': [Action.Buy_Soucher_Action],
        'payload': {
            request: {
                url:'soucher/gift',
                method: 'POST',
                data: transaction,
            }
        }
    }
};

export const transacting = (state) => {
    return {
        'type': Action.Transacting,
        'payload': {
            data: state
        }
    }
};