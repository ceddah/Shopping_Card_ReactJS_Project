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
    
    return (
        <AppContext.Provider value={{
            ...state,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}