import * as Action from '../state/constant';
import * as Worker from '../state/worker';

export const SwapReducer = (state = Worker.initialState(), action) => {
    switch (action.type) {
        case Action.Fetch_Soucher_Success:
            return {
                ...state,
                'soucher': Worker.addSoucher(action.payload.data),
            };
        case Action.Fetch_Catalog_Success:
            return {
                ...state,
                'catalog': Worker.addCatalog(state.catalog, state.soucher, state.basket, action.payload.data),
                'basket': Worker.makeBasket(state.basket, state.soucher),
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
            return Worker.resetSoucher(Action.STATUS_CANCELLED);
        case Action.Complete_Swap_Action:
            return Worker.resetSoucher(Action.STATUS_COMPLETE);
        default:
            return state;
    }
};
