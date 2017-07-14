import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {SwapReducer} from '../SwapSoucher/reducer';
import {FilterReducer} from '../Filter/reducer';
import * as Action from '../state/constant';

let initial_state = {
    transacting: false
};

const GlobalStateReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Action.Transacting:
            return {
                ...state,
                'transacting': action.payload.data,
            };
        default:
            return state;
    }
};

export default combineReducers({
    swap: SwapReducer,
    form: formReducer,
    filter: FilterReducer,
    global: GlobalStateReducer
});
