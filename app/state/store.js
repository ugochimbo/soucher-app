import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducers from './reducer';

const client = axios.create({
    baseURL:'https://api.soucher.com/',
    auth: {
        username: 'staging',
        password: 'paco'
    },
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    responseType: 'json'
});

export default createStore(
    reducers,
    applyMiddleware(axiosMiddleware(client))
)
