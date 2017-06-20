import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {SwapReducer} from '../SwapSoucher/reducer';
import {GiftReducer} from '../GiftSoucher/reducer';

export default combineReducers({
    gift: GiftReducer,
    swap: SwapReducer,
    form: formReducer
});
