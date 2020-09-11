import * as Types from './types';

export const retrieveCartItems = items => ({
    type: Types.RETRIEVE_CART_ITEMS,
    payload: {items},
});

export const addToCart = productId => ({
    type: Types.ADD_TO_CART,
    payload: {productId},
});

export const removeFromCart = productId => ({
    type: Types.REMOVE_FROM_CART,
    payload: {productId},
});

export const incrementQuantity = productId => ({
    type: Types.INCREMENT_QUANTITY,
    payload: {productId},
});

export const decrementQuantity = productId => ({
    type: Types.DECREMENT_QUANTITY,
    payload: {productId},
});
