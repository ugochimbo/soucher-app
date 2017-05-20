export const Buy_Soucher_Action = 'BUY_SOUCHER';
export const Buy_Soucher_Success_Action = 'BUY_SOUCHER_SUCCESS';
export const Buy_Soucher_Error_Action = 'BUY_SOUCHER_FAILURE';

export const Swap_Soucher_Action = 'SWAP_SOUCHER';
export const Swap_Soucher_Success_Action = 'SWAP_SOUCHER_SUCCESS';
export const Swap_Soucher_Error_Action = 'SWAP_SOUCHER_ERROR';

export const buySoucher = (soucherDetails) => {
    return {
        'type': [Buy_Soucher_Action, Buy_Soucher_Success_Action, Buy_Soucher_Error_Action],
        'payload': {
            request: {
                url:'soucher/buy',
                method: 'POST',
                data: soucherDetails
            }
        }
    }
};

export const swapSoucher = (soucherDetails) => {
    return {
        'type': [Swap_Soucher_Action, Swap_Soucher_Success_Action, Swap_Soucher_Error_Action],
        'payload': soucherDetails
    }
};

