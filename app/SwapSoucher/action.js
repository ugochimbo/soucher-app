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