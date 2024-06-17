export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TOCART': return {
            ...state,
            cartItem: [...state.cartItems, action.payload]
        }
        default: return state
    }
}