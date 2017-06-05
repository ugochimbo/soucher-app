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
    return {
        value: soucher.amount,
        balance: soucher.amount,
        items: [],
    }
}

export function updateBasketGiftItems(basket, giftCard) {

    let items = basket.items;
    items.push({
        name: giftCard.name,
        value: giftCard.value,
    });

    return {
        ...basket,
        'items': items,
        'balance': basket.balance - giftCard.amount
    }
}

