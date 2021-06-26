import React, {useState,useContext,useReducer} from 'react';
import shopItems from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    cart: [],
    shop: shopItems,
    total: 0,
    amount: 0
};

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer, initialState);

    const addItemToCart = (id) => dispatch({ type: 'ADD_ITEM', payload: id});

    const removeItemFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id});

    return (
        <AppContext.Provider value={{
            ...state,
            addItemToCart,
            removeItemFromCart
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}