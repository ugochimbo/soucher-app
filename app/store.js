import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducer';

const client = axios.create({
    baseURL:'http://soucher.dev/',
    responseType: 'json',
    headers: {'Access-Control-Allow-Origin' : '*'}
});

export default createStore(
    reducer,
    applyMiddleware(axiosMiddleware(client))
)
