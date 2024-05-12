import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { getAllShoesReducer } from "./reducers/ShoesReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    allShoes: getAllShoesReducer, // Assuming `getAllShoesReducer` is your reducer for fetching all shoes
});

const initialState = {};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
    preloadedState: initialState,
    // Note: No need to use composeWithDevTools or enhancers here, as Redux Toolkit handles this internally
});




// const initialState = {};
// const middleware = [thunk];

// const enhancers = applyMiddleware(...middleware);

// const composeEnhancers = composeWithDevTools(
//     enhancers
// );

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//     devTools: true,
//     preloadedState: initialState,
//     enhancers: (getDefaultEnhancers) => [composeEnhancers, ...getDefaultEnhancers],

// });
