import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {Buy_Soucher_Action} from './action';
import {List, Map} from 'immutable';

let BuySoucher = (state = List(), action) => {
    switch(action.type) {
        case Buy_Soucher_Action:
            console.log(action);
            return '';
        default:
            return state;
    }
};


export default combineReducers({
    buySoucher: BuySoucher,
    form: formReducer
});
