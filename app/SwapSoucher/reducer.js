import * as Action from '../state/constant';
import * as Worker from '../state/worker';

let initial_state = {
    soucher: {
        id: '',
        code: '',
        amount: 0,
        currency: 'EUR',
    },
    filter : {
        category: '',
        search: '',
    },
    catalog : [],
    basket: {
        value: 0,
        balance: 0,
        items: [],
    }
};

export const SwapReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Action.Fetch_Soucher_Success:
            return {
                ...state,
                'soucher': Worker.updateSoucher(action.payload.data)
            };
        case Action.Fetch_Catalog_Success:
            return {
                ...state,
                'catalog': Worker.updateCatalog(action.payload.data),
                'basket': Worker.updateBasket(state.soucher),
            };
        case Action.Update_Basket_Action:
            return  {
                ...state,
                'basket': Worker.updateBasketGiftItems(state.basket, action.payload)
            };
        default:
            return state;
    }
};