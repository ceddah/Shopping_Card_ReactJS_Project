import React, {useState,useContext,useReducer} from 'react';
import shopItems from './data';
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    cart: [
    {
        id: 3,
        title: 'Skinny Regular Jeans',
        price: 24.99,
        amount: 1,
        description: 'Maecenas nunc urna, sodales eu semper vitae, facilisis luctus justo. Etiam tempus faucibus diam, quis porta nunc finibus finibus. Donec vestibulum, dolor id convallis posuere, mauris leo eleifend mi, quis dignissim lectus massa id lectus. Phasellus vitae efficitur ipsum. Suspendisse rutrum lacinia tortor, non hendrerit lorem sodales eu. Maecenas lobortis ante non turpis congue malesuada.',
        discount: 25,
        rating: 4,
        image: 'https://i.postimg.cc/BvBbWfYX/Skinny-Regular-Jeans.jpg'
    },
    {
        id: 4,
        title: 'Mom High Pleated Jeans',
        price: 24.99,
        amount: 1,
        description: 'Sed ullamcorper augue sit amet lacus efficitur, non maximus elit accumsan. Pellentesque posuere nibh magna, ac ornare mauris gravida in. Phasellus pharetra magna eget vulputate condimentum. Donec a lectus sit amet arcu sollicitudin eleifend ut non purus. Nam et tempus nisl, eu imperdiet nunc.',
        discount: 0,
        rating: 5,
        image: 'https://i.postimg.cc/sgZGN8Ch/Mom-High-Pleated-Jeans.jpg'
    }
    ],
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