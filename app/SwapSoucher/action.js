import * as Action from '../state/constant';

export const fetchSoucher = (values) => {
    return {
        'type': [Action.Fetch_Soucher_Action],
        'payload': {
            request: {
                url: `/soucher/gift/${values.soucherCode}`,
                method: 'GET',
            },
        }
    }
};

export const fetchCatalog = () => {
    return {
        'type': [Action.Fetch_Catalog_Action],
        'payload': {
            request: {
                url: '/voucher',
                method: 'GET',
            }
        }
    }
};

export const addBasketItem = (giftCard) => {
    return {
        'type': Action.Add_Basket_Item_Action,
        'payload': giftCard
    }
};

export const removeBasketItem = (giftCard) => {
    return {
        'type': Action.Remove_Basket_Item_Action,
        'payload': giftCard
    }
};

export const cancelSwap = () => {
    return {
        'type': Action.Cancel_Swap_Action
    }
};

export const completeSwap = (swapDetails) => {
    return {
        'type': Action.Complete_Swap_Action,
        'payload': {
            request: {
                url: '/swap',
                method: 'POST',
                data: swapDetails
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