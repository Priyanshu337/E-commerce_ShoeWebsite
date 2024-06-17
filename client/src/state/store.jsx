import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getShoesReducer } from "./reducers/ShoesReducer";
import { combineReducers } from 'redux';
import { cartReducer } from './reducers/CartReducer';

const rootReducer = combineReducers({
    allShoes: getShoesReducer, // Assuming `getShoesReducer` is your reducer for fetching all shoes
    cartReducer: cartReducer
});

const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []

const initialState = {
    cartItem: cartItem
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
    preloadedState: initialState,
});


