import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import BuySoucher from '../app/BuySoucher/Reducer';

export default combineReducers({
    buySoucher: BuySoucher,
    form: formReducer
});
