export const addToCart = (shoe, quantity, size) => (dispatch, getState) => {

    var cartItem = {
        name: shoe.name,
        _id: shoe._id,
        image: shoe.image,
        size: shoe.size,
        quantity: shoe.quantity,
        prices: shoe.prices,
        price: shoe.prices[0][size] * quantity
    }
    dispatch({ type: 'ADD_TOCART', payload: cartItems });
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}