// Unique identifiers for the actions
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR_CART = 'CLEAR_CART'

export const addItem = (id) => {
    return { type: ADD_ITEM, productId: id }
}

export const deleteItem = (id) => {
    return { type: DELETE_ITEM, productId: id }
};

export const clearCart = () => {
    return { type: CLEAR_CART }
}