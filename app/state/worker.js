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

const updateCatalog = (catalog, response) => {
    if (catalog.pagination.current_page > 1) {
        return [...catalog.gift_cards, ...response.gift_cards];
    }

    return response.gift_cards;
};

export function addCatalog(catalog, soucher, response) {
    if (response.status !== Action.SUCCESS_RESPONSE_CODE) {
        return {
            code: response.code,
            message: response.message
        };
    }

    return {
        ...catalog,
        'gift_cards': updateCatalog(catalog, response),
        'pagination': response.pagination,
        'max_amount': soucher.amount,
        'disabled': soucher.amount > 0 ? '': 'disabled'
    };
}

export function makeBasket(soucher) {
    return {
        value: soucher.amount,
        balance: soucher.amount,
        items: [],
    }
}

export function updateCatalogDisability(catalog, basket, soucher, action) {
    if (action.type === Action.Add_Basket_Item_Action) {
        if ((basket.balance - action.payload.amount) <= 0) {
            return {
                ...catalog,
                'max_amount': soucher.amount,
                'disabled': 'disabled'
            };
        }
        return {
            ...catalog,
            'disabled': basket.balance - action.payload.amount > 0 ? '': 'disabled',
            'max_amount': basket.balance - action.payload.amount
        };
    }

    if ((basket.balance + action.payload.amount) <= 0) {
        return {
            ...catalog,
            'max_amount': soucher.amount,
            'disabled': 'disabled'
        };
    }

    return {
        ...catalog,
        'disabled': basket.balance + action.payload.amount > 0 ? '': 'disabled',
        'max_amount': basket.balance + action.payload.amount
    };

}

export function updateSearchedCatalog(catalog, gift_cards, filter, searchKey) {
    if (searchKey === filter.searchKey) {
        return [...catalog, ...gift_cards];
    }

    return gift_cards;
}

export function addBasketGiftItems(basket, giftCard) {
    let balance = basket.balance - giftCard.amount;

    if (balance < 0) {
        return basket;
    }

    let items = basket.items;
    items.push({
        id: giftCard.id,
        name: giftCard.name,
        amount: giftCard.amount,
    });

    return {
        ...basket,
        'items': items,
        'balance': balance
    }
}

export function removeBasketGiftItems(basket, giftCard) {
    let balance = basket.balance + giftCard.amount;
    let items = basket.items;

    for (let i = 0; i < items.length; i++) {
        if (items[i].id === giftCard.id && items[i].amount === giftCard.amount) {
            items.splice(i, 1);
            break;
        }
    }

    return {
        ...basket,
        'items': items,
        'balance': balance
    }
}
