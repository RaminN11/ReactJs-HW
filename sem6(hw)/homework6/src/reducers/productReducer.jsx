import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, TOGGLE_AVAILABILITY } from "../actions/Actions";

const initialState = [];

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload];
        
        case DELETE_PRODUCT:
            return state.filter((product) => product.id !== action.payload);

        case UPDATE_PRODUCT:
            return state.map((product) => product.id === action.payload.id ? { ...action.payload } : product);

        case TOGGLE_AVAILABILITY:
            return state.map((product) =>
                product.id === action.payload
                  ? { ...product, available: !product.available }
                  : product
              );
        default:
            return state;
    }
    
}