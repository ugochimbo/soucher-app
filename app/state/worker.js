import * as Action from '../state/constant';

export function updateSoucher(soucher) {
    if (soucher.status !== Action.SUCCESS_RESPONSE_CODE) {
        return {
            code: soucher.code,
            message: soucher.message,
            isValid: false
        };
    }

    let value = JSON.parse(soucher.value);
    return {
        id: soucher.id,
        code: soucher.code,
        amount: value.amount,
        currency: value.currency,
        isValid: true
    };
}

export function updateCatalog(catalog) {
    if (catalog.status !== Action.SUCCESS_RESPONSE_CODE) {
        return {
            code: catalog.code,
            message: catalog.message
        };
    }

    return catalog;
}

export function updateBasket(soucher) {
    let currency = soucher.currency;
    return {
        value: soucher.amount,
        in_use: 0,
        items: [
            {name : 'Amazon', value : '20 ' + currency},
            {name : 'H&M', value : '10 ' + currency},
            {name : 'Ebay', value : '10 ' + currency}
        ],
    }
}

