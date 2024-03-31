import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { getAllShoesReducer } from "./reducers/ShoesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';



function FinalReducer(getAllShoesReducer) {
    return combineReducers(
        getAllShoesReducer,
    )
}

const initialState = {}

const composeEnhancers = composeWithDevTools({});

export const store = configureStore(FinalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

// export default store;

