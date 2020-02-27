import PRODUCTS from '../../data/dummy-data';

const initialState = {
    allProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.id === "u1")
}

const productsReducer = (state = initialState, actions) => {
    return state
}

export default productsReducer;