const reducer = (state,action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            const newItem = state.shop.find(item => item.id === action.payload);
            return {...state, cart: [...state.cart, newItem]};
        case 'REMOVE_ITEM':
            const updatedData = state.cart.filter(item => item.id !== action.payload);
            return {...state, cart: updatedData};
        case 'INCREASE_AMOUNT':
            let tempData = state.cart.map(item => {
                if(item.id === action.payload) {
                    return {...item, amount: item.amount + 1}
                }
                return item;
            });
            return {...state, cart: tempData};
        case 'DECREASE_AMOUNT':
            let tempData1 = state.cart.map(item => {
                if(item.id === action.payload) {
                    return {...item, amount: item.amount - 1}
                }
                return item;
            }).filter(item => item.amount !== 0);
            return {...state, cart: tempData1};
        default:
            return state;
    }
}

export default reducer;