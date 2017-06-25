import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {SwapReducer} from '../SwapSoucher/reducer';
import * as Action from '../state/constant';
import * as Worker from '../state/worker';

let initial_state = {
    transacting: false
};

const GlobalState = (state = initial_state, action) => {
    switch (action.type) {
        case Action.Transacting:
            return {
                ...state,
                'transacting': Worker.updateTransactionState(state.transacting, action.payload.data),
            };
        default:
            return state;
    }
};

export default combineReducers({
    swap: SwapReducer,
    form: formReducer,
    global: GlobalState
});
