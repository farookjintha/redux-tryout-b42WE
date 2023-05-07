const cart = []
const cartReducer = (state = cart, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.data];
        case 'REMOVE_FROM_CART':
            return state.filter((item) => item.id !== action.data.id);
        case 'EMPTY_CART':
            return []
        default:
            return state;
    }
};

export default cartReducer;