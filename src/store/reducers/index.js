import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import counterReducer from "./counter.reducer";
import productReducer from "./product.reducer";

const allReducers = combineReducers({
    counter: counterReducer,
    cart: cartReducer,
    product: productReducer
});

export default allReducers;