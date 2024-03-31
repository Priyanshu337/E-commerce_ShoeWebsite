export const getAllShoesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SHOES_REQUESTS': return {
            ...state
        }
        case 'GET_SHOES_SUCCESS': return {
            shoes: action.payload
        }
        case 'GET_SHOES_FAILURE': return {
            error: action.payload
        }
        default: return state
    }
}

// export default getAllShoesReducer;