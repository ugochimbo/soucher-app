import * as LINK_TO from './config/constant';

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

export const endTransaction = (history) => {
    history.push(LINK_TO.HOME);
};

export const swapSoucher = (soucherDetails) => {
    return {
        'type': [Swap_Soucher_Action],
        'payload': soucherDetails
    }
};

export const fetchSoucher = (values) => {
    return {
        'type': [Fetch_Soucher_Action],
        'payload': {
            request: {
                url: `/soucher/gift/${values.soucherCode}`,
                method: 'GET',
            },
            options: {
                onSuccess: function (data) {
                    let status = data.response.data.status;
                    let soucher = {};

                    if (status === SUCCESS_RESPONSE_CODE) {
                        let value = JSON.parse(data.response.data.value);
                        soucher = {
                            id: data.response.data._id,
                            code: data.response.data.code,
                            amount: value.amount,
                            currency: value.currency,
                        };
                    } else {
                        return data.response.data
                    }

                    return {
                        soucher,
                        status
                    }
                },
                onError: function () {
                    return false;
                }
            }
        }
    }
};

export const getCatalog = () => {
    return {
        'type': [Fetch_Catalog_Action],
        'payload': {
            request: {
                url: '/voucher',
                method: 'GET',
            },
            options: {
                onSuccess: function (data) {
                    return data.response.data;
                },
                onError: function () {
                    return false;
                }
            }
        }
    }
};

export const demoRedux = (data) => {
    return {
        'type': Start_Swap_Action,
        'data': data
    }
};

