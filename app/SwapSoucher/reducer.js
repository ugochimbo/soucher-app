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
        category: {
            items: [],
            selected: '',
        },
        search: '',
    },
    catalog : {
        items: [],
        disabled: '',
        max_amount: 0
    },
    basket: {
        value: 0,
        balance: 0,
        items: [],
    },
    status: ''
};

export const SwapReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Action.Fetch_Soucher_Success:
            return {
                ...state,
                'soucher': Worker.addSoucher(action.payload.data),
            };
        case Action.Fetch_Catalog_Success:
            return {
                ...state,
                'catalog': Worker.addCatalog(state.catalog, state.soucher, action.payload.data),
                'basket': Worker.makeBasket(state.soucher),
            };
        case Action.Add_Basket_Item_Action:
            return  {
                ...state,
                'catalog': Worker.updateCatalogDisability(state.catalog, state.basket, state.soucher, action),
                'basket': Worker.addBasketGiftItems(state.basket, action.payload),
            };
        case Action.Remove_Basket_Item_Action:
            return  {
                ...state,
                'catalog': Worker.updateCatalogDisability(state.catalog, state.basket, state.soucher, action),
                'basket': Worker.removeBasketGiftItems(state.basket, action.payload),
            };
        case Action.Cancel_Swap_Action:
            return  {
                ...state,
                'soucher': initial_state.soucher,
                'status': Action.SWAP_CANCELLED,
            };
        case Action.Complete_Swap_Success:
            return  {
                ...state,
                'status': Action.SWAP_COMPLETE,
            };
        default:
            return state;
    }
};