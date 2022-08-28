//import React from "react";
import { combineReducers } from 'redux';
import { orderData } from './order-data-reducer';


export const rootReducer = combineReducers({
    //user: userReduser,
    orderData: orderData,
})
