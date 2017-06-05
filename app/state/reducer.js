import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {SwapReducer} from '../SwapSoucher/reducer';
import * as Action from './action';
import {Map} from 'immutable';

const giftReducer = (state = Map(), action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    gift: giftReducer,
    swap: SwapReducer,
    form: formReducer
});
