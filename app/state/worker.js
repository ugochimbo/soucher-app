import * as Action from '../state/constant';

export function addSoucher(soucher) {
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

export function addCatalog(catalog, response) {
    if (response.status !== Action.SUCCESS_RESPONSE_CODE) {
        return {
            code: response.code,
            message: response.message
        };
    }

    return {
        ...catalog,
        'items': response
    };
}

export function makeBasket(soucher) {
    return {
        value: soucher.amount,
        balance: soucher.amount,
        items: [],
    }
}

export function updateCatalogDisability(catalog, basket, giftCard) {
    return {
        ...catalog,
        'disabled': basket.balance - giftCard.amount > 0 ? '': 'disabled'
    };
}

export function updateBasketGiftItems(basket, giftCard) {
    let balance = basket.balance - giftCard.amount;

    if (balance < 0) {
        return basket;
    }

    let items = basket.items;
    items.push({
        name: giftCard.name,
        value: giftCard.value,
    });

    return {
        ...basket,
        'items': items,
        'balance': balance
    }
}

