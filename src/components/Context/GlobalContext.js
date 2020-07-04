import React, { createContext, useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import { products } from '../Products/productDummy';

const initialState = {
    products,
    cart : [

    ]
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    let [state,dispatch] = useReducer(GlobalReducer,initialState);

    function addItem(product){
        dispatch({
            type:'ADD_TO_CART',
            payload: product
        })
    }
    function plus(id){
        dispatch({
            type: 'INCREASE',
            payload: id
        })
    }
    function minus(id){
        dispatch({
            type: 'DECREASE',
            payload: id
        })
    }
    function remove(id){
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }
    function checkout(){
        dispatch({
            type: 'CHECKOUT',
        })
    }


    return(
        <GlobalContext.Provider value={{
            products:state.products,
            cart:state.cart,
            addItem,
            plus,
            minus,
            remove,
            checkout
        }}>{ children }</GlobalContext.Provider>
    );
}