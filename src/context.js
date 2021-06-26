import React, {useContext,useReducer,useEffect} from 'react';
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

    const addItemToCart = (id) => dispatch({ type: 'ADD_ITEM', payload: id });

    const removeItemFromCart = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });

    const increaseAmount = (id) => dispatch({ type: 'INCREASE_AMOUNT', payload: id });

    const decreaseAmount = (id) => dispatch({ type: 'DECREASE_AMOUNT', payload: id} );

    useEffect(() => {
        dispatch({ type: 'GET_TOTAL_PRICE' });
    }, [state.cart])

    return (
        <AppContext.Provider value={{
            ...state,
            addItemToCart,
            removeItemFromCart,
            increaseAmount,
            decreaseAmount
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider}