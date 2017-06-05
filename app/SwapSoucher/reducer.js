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
        in_use: 0,
        items: [],
    }
};

export const SwapReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Action.Swap_Soucher_Action:
            console.log(action);
            return state;
        case Action.Start_Swap_Action:
            console.log("na lie");
            return state;
        case Action.Fetch_Soucher_Success:
            state.soucher = Worker.updateSoucher(action.payload.data);
            return state;
        case Action.Fetch_Catalog_Success:
            state.catalog = Worker.updateCatalog(action.payload.data);
            state.basket = Worker.updateBasket(state.soucher);
            return state;
        default:
            return state;
    }
};