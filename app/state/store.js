import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducers from './reducer';

const client = axios.create({
    baseURL:'http://soucher.dev/',
    responseType: 'json'
});

export default createStore(
    reducers,
    applyMiddleware(axiosMiddleware(client))
)
