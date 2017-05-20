import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import * as Action from './action';
import {List, Map} from 'immutable';

let reducer = (state = List(), action) => {
    switch(action.type) {
        case Action.Buy_Soucher_Action:
            console.log(action);
            return state;
        case Action.Swap_Soucher_Action:
            console.log(action);
            return state;
        default:
            return state;
    }
};

export default combineReducers({
    reducer: reducer,
    form: formReducer
});
