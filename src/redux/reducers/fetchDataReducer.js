// fetchDataReducer.js
import { FETCH_DATA_SUCCESS } from "../actionTypes"

const fetchDataReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            const data = action.payload
            return {...state, ...data}
        default:
            return state
    }
}

export default fetchDataReducer
