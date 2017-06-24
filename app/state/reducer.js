import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {SwapReducer} from '../SwapSoucher/reducer';

export default combineReducers({
    swap: SwapReducer,
    form: formReducer
});
