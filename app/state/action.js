import * as LINK_TO from '../config/constant';

export const Buy_Soucher_Action = 'BUY_SOUCHER';
export const Swap_Soucher_Action = 'SWAP_SOUCHER';
export const Fetch_Soucher_Action = 'VALIDATE_SOUCHER_CODE';
export const Fetch_Catalog_Action = 'FETCH_CATALOG';
export const Start_Swap_Action = 'START_SWAP';

const SUCCESS_RESPONSE_CODE = 200;

export const buySoucher = (soucherDetails, history) => {
    return {
        'type': [Buy_Soucher_Action],
        'payload': {
            request: {
                url:'soucher/gift',
                method: 'POST',
                data: soucherDetails,
            },
            options: {
                onSuccess: function (data) {
                    if (data.response.status === SUCCESS_RESPONSE_CODE) {
                        history.push(LINK_TO.GIFT_SOUCHER_SUCCESS_ROUTE);
                    } else {
                        history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
                    }
                },
                onError: function () {
                    history.push(LINK_TO.TRANSACTION_ERROR_ROUTE);
                }
            }
        }
    }
};


