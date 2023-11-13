import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index'

export default function configureStores(initialState) {
    const store = configureStore({reducer:reducers}, initialState)
    return store;
}