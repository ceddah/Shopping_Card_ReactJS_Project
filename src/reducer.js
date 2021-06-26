const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = state.shop.find(item => item.id === action.payload);
            return {...state, cart: [...state.cart, newItem]};
        case 'REMOVE_ITEM':
            const updatedData = state.cart.filter(item => item.id !== action.payload);
            return {...state, cart: updatedData};
        default:
            return state;
    }
}

export default reducer;