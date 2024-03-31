import axios from "axios";

export const getAllShoes = () => dispatch => {
    dispatch({ type: 'GET_SHOES_REQUEST' })

    try {
        const response = axios.get('/api/shoes/getshoes')
        // routes of shoes in remaining to create
        console.log(response);
        dispatch({ type: 'GET_SHOES_SUCCESS', payload: response.data })

    } catch (err) {
        dispatch({ type: 'GET_SHOES_FAILED', payload: err.message })

    }
}

// export default getAllShoes;
