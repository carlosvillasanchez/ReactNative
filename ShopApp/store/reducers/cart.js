import { ADD_ITEM } from "../actions/cart";

import PRODUCTS from '../../data/dummy-data';
import CartItem from '../../models/cart-item';

const initialState = {
    items: {}, // An JS object so that the key is the id and the value the object. To avoid 2 same products.
    totalAmount: 0,
}

const productsReducer = (state = initialState, action) => {
    console.log("JEJE2")
    switch (action.type) {
        case ADD_ITEM:
            const existingIndex = PRODUCTS.findIndex(product => product.id === action.productId); // -1 or an int
            if (existingIndex >= 0) {
                console.log("JEJE3", existingIndex, action.productId)
                const updatedCart = {...state.items}; // COPY the real array
                let sum = state.totalAmount;
                const productToAdd = PRODUCTS[existingIndex];
                sum += productToAdd.price;
                if (updatedCart[action.productId]) {
                    updatedCart[action.productId].quantity += 1;
                    updatedCart[action.productId].sum += productToAdd.price;
                } else {
                    const newCartItem = new CartItem(1, productToAdd.price, productToAdd.title, productToAdd.price);
                    updatedCart[action.productId] = newCartItem;
                }
                console.log("IZI", { totalAmount: sum, items: updatedCart })
                return { totalAmount: sum, items: updatedCart };
            }else{
                return state
            }

        default:
            return state
    }
}

export default productsReducer;